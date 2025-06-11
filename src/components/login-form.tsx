import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const AccountTypeCard = ({ type, isSelected, onClick, icon, description }) => (
  <button
    type="button"
    onClick={() => onClick(type)}
    className={cn(
      "flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-200 hover:border-green-300 hover:bg-green-50",
      isSelected ? "border-green-500 bg-green-50" : "border-gray-200"
    )}
  >
    <div className="text-2xl mb-2">{icon}</div>
    <span className="font-medium text-sm">{type}</span>
    <span className="text-xs text-gray-500 mt-1 text-center">{description}</span>
  </button>
);

export default function DigitalAgronomistSignup() {
  const [selectedAccountType, setSelectedAccountType] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const accountTypes = [
    { 
      type: 'Tree Vendor', 
      icon: '🌳', 
      description: 'Sell trees and saplings' 
    },
    { 
      type: 'Farmer', 
      icon: '👨‍🌾', 
      description: 'Grow and manage crops' 
    },
    { 
      type: 'Consultant', 
      icon: '📊', 
      description: 'Provide expert advice' 
    },
    { 
      type: 'Buyer', 
      icon: '🛒', 
      description: 'Purchase agricultural products' 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br">
      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <div className="w-full max-w bg-white rounded-lg p-8">
          <div className="space-y-12">
      
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">Create your account</h1>
              <p className="text-gray-600 text-sm">
                Please select the type of account you would like to create
              </p>
            </div>

            {/* Account Type Selection */}
            <div className="space-y-4">
              <Label className="text-base font-medium">Account Type</Label>
              <div className="grid grid-cols-2 gap-3">
                {accountTypes.map((account) => (
                  <AccountTypeCard
                    key={account.type}
                    type={account.type}
                    icon={account.icon}
                    description={account.description}
                    isSelected={selectedAccountType === account.type}
                    onClick={setSelectedAccountType}
                  />
                ))}
              </div>
            </div>

            {/* Phone Number Input */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Continue Button */}
            <Button 
              type="button"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5"
              disabled={!selectedAccountType || !phoneNumber}
            >
              Continue
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button 
                type="button"
                variant="outline" 
                className="flex items-center justify-center gap-2 py-2.5"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="text-sm">Google</span>
              </Button>
              
              <Button 
                type="button"
                variant="outline" 
                className="flex items-center justify-center gap-2 py-2.5"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="text-sm">Email</span>
              </Button>
            </div>

            {/* Terms */}
            <p className="text-center text-xs text-gray-500">
              By continuing, you agree to our{' '}
              <a href="#" className="text-green-600 hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-green-600 hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}