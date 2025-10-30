import { CheckCircle2Icon } from 'lucide-react';
export function AboutSection() {
  const achievements = ['Strategic brand positioning and messaging', 'Award-winning creative campaigns', 'Data-driven marketing approaches', 'End-to-end project management'];
  return <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-16 h-0.5 bg-teal-500"></span>
              <span className="text-sm font-semibold text-gray-600">
                ABOUT US
              </span>
            </div>
            <h2 className="text-4xl font-bold text-teal-900 mb-6">
              Crafting Success Stories
              <br />
              Since 2019
            </h2>
            <p className="text-gray-600 mb-6">
              We are a full-service advertising agency dedicated to helping
              brands tell their stories in ways that resonate, inspire, and
              drive action. Our team of creative strategists, designers, and
              digital experts work together to create campaigns that not only
              look amazing but deliver real business results.
            </p>
            <div className="space-y-3">
              {achievements.map((achievement, index) => <div key={index} className="flex items-center gap-3">
                  <CheckCircle2Icon className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>)}
            </div>
            <p className="text-gray-600 italic mt-6 pl-4 border-l-4 border-teal-500">
              "Our mission is to transform brands into powerful stories that
              connect with people's lives and minds, driving both emotional
              engagement and business growth."
            </p>
          </div>
          <div className="relative">
            <img src="/1.jpg" alt="Team collaboration" className="rounded-lg shadow-xl w-full" />
          </div>
        </div>
      </div>
    </section>;
}