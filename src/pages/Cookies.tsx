import React from 'react';

export default function Cookies() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="prose max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our calculator.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Essential Cookies</h3>
                <p>Required for the calculator to function properly. These cannot be disabled.</p>
              </div>
              <div>
                <h3 className="font-semibold">Performance Cookies</h3>
                <p>Help us understand how visitors interact with our calculator.</p>
              </div>
              <div>
                <h3 className="font-semibold">Functionality Cookies</h3>
                <p>Remember your preferences and previous calculations.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
            <p>You can control cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features of our calculator.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
            <p>Some third-party services may place cookies on your device. These include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Analytics (usage analytics)</li>
              <li>Essential calculation services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
            <p>We may update this Cookie Policy periodically. Please check back regularly for any changes.</p>
          </section>
        </div>
      </div>
    </div>
  );
}