import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useCreateOrder } from '../hooks/useQueries';
import { Loader2, CheckCircle2 } from 'lucide-react';
import type { Order } from '../backend';

interface OrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function OrderDialog({ open, onOpenChange }: OrderDialogProps) {
  const [formData, setFormData] = useState({
    batType: '',
    size: '',
    gripColor: '',
    gripStyle: '',
    deliveryAddress: '',
    notes: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  
  const createOrderMutation = useCreateOrder();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Map form data to backend Order type
    const order: Order = {
      shape: formData.batType || 'Standard',
      size: BigInt(formData.size || '0'),
      lid: false, // Not used in this context
      handleColor: formData.gripColor || undefined,
      wrappingColor: formData.gripStyle || undefined,
      deliveryAddress: `${formData.deliveryAddress}\n\nNotes: ${formData.notes}`.trim()
    };

    try {
      await createOrderMutation.mutateAsync(order);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onOpenChange(false);
        setFormData({
          batType: '',
          size: '',
          gripColor: '',
          gripStyle: '',
          deliveryAddress: '',
          notes: ''
        });
      }, 2000);
    } catch (error) {
      console.error('Order submission failed:', error);
    }
  };

  if (showSuccess) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Order Received!</h3>
            <p className="text-muted-foreground">
              Thank you for your order. We'll contact you shortly to confirm the details.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Order Your Custom Bat</DialogTitle>
          <DialogDescription>
            Fill in the details below and we'll create your perfect cricket tennis bat with custom grip.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="batType">Bat Type / Model</Label>
              <Input
                id="batType"
                placeholder="e.g., Professional, Standard, Junior"
                value={formData.batType}
                onChange={(e) => setFormData({ ...formData, batType: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="size">Bat Size (inches)</Label>
              <Input
                id="size"
                type="number"
                placeholder="e.g., 34, 36"
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="text-primary">★</span> Custom Grip Preferences
              </h4>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="gripColor">Grip Color</Label>
                  <Input
                    id="gripColor"
                    placeholder="e.g., Red, Blue, Black"
                    value={formData.gripColor}
                    onChange={(e) => setFormData({ ...formData, gripColor: e.target.value })}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="gripStyle">Grip Style / Texture</Label>
                  <Input
                    id="gripStyle"
                    placeholder="e.g., Smooth, Textured, Cushioned"
                    value={formData.gripStyle}
                    onChange={(e) => setFormData({ ...formData, gripStyle: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="deliveryAddress">Contact & Delivery Address</Label>
            <Textarea
              id="deliveryAddress"
              placeholder="Your name, phone number, and complete delivery address"
              value={formData.deliveryAddress}
              onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes (Optional)</Label>
            <Textarea
              id="notes"
              placeholder="Any special requirements or preferences..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={3}
            />
          </div>

          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              disabled={createOrderMutation.isPending}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={createOrderMutation.isPending}
            >
              {createOrderMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Order'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
