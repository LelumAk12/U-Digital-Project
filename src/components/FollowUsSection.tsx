import React from 'react';
import { YoutubeIcon, TwitchIcon, FacebookIcon, LinkedinIcon } from 'lucide-react';
export function FollowUsSection() {
  const socialLinks = [{
    icon: YoutubeIcon,
    name: 'YouTube',
    handle: 'Watch our work'
  }, {
    icon: TwitchIcon,
    name: 'TikTok',
    handle: 'Follow us on tiktok'
  }, {
    icon: FacebookIcon,
    name: 'Facebook',
    handle: 'Like us on facebook'
  }, {
    icon: LinkedinIcon,
    name: 'LinkedIn',
    handle: 'Connect with us'
  }];
  return <section className="w-full bg-gradient-to-br from-brand-dark to-brand-teal-dark text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-brand-teal-dark p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">FOLLOW US</h3>
          <p className="text-gray-300 mb-6">
            Stay updated with our latest work and behind-the-scenes content.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialLinks.map((social, index) => <div key={index} className="flex items-center gap-3 bg-brand-dark p-4 rounded-lg hover:bg-opacity-80 cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-teal to-brand-teal-dark rounded-lg flex items-center justify-center">
                  <social.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">{social.name}</div>
                  <div className="text-sm text-gray-300">{social.handle}</div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}