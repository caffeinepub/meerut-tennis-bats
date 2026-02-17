import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User profile type
  public type UserProfile = {
    name : Text;
    email : Text;
    phone : Text;
  };

  // Order type
  public type Order = {
    size : Nat;
    shape : Text;
    lid : Bool;
    handleColor : ?Text;
    wrappingColor : ?Text;
    deliveryAddress : Text;
  };

  let ordersByCustomer = Map.empty<Principal, [Order]>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  public shared ({ caller }) func createOrder(request : Order) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can create orders");
    };

    let currentOrders = switch (ordersByCustomer.get(caller)) {
      case (null) { [] : [Order] };
      case (?orders) { orders };
    };
    ordersByCustomer.add(caller, currentOrders.concat([request]));
  };

  public query ({ caller }) func listOrders() : async [Order] {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can list orders");
    };

    switch (ordersByCustomer.get(caller)) {
      case (null) { [] };
      case (?orders) { orders };
    };
  };

  public query ({ caller }) func listAllOrders() : async [(Principal, [Order])] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view all orders");
    };

    let entries = ordersByCustomer.entries();
    entries.toArray();
  };
};
