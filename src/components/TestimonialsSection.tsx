import { Star, ShieldCheck, Quote, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/labData';

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase font-bold tracking-wider text-sky-700 mb-2">
            La Confiance des Patients et Médecins
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
            Ce que disent nos patients à Casablanca
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Un engagement quotidien pour votre santé, votre confort et la rapidité de vos résultats.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md">
                    {t.tag}
                  </span>
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.content}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-['Outfit']">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {t.role}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust banner */}
        <div className="mt-12 text-center text-xs text-slate-500">
          <p className="flex items-center justify-center gap-2">
            <ThumbsUp className="w-4 h-4 text-emerald-600" />
            <span>98.7% des patients satisfaits de la ponctualité des prélèvements et de la clarté des comptes-rendus.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
