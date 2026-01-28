"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Rocket, Target, Package } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#FDFCF8]">
      {/* Section 1: Hero - Apple Launch Style */}
      <section className="relative flex items-center justify-center px-6 pt-20 pb-12 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/99p-0013-slidedark.png')" }}>
        <div className="max-w-6xl mx-auto text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-white">
              Get your product out to market, already.
            </h1>
            <h2 className="text-2xl md:text-3xl text-white/60 mb-12 max-w-3xl mx-auto">
              Wether you're stuck or starting out, Pablo can help you ship faster.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-green rounded-full px-12 py-2 text-lg h-auto"
              >
                <Link href="/consulting">
                 View Consulting
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="ghost"
                className="text-white hover:bg-black/5 rounded-full px-8 py-4 text-lg h-auto"
              >
                <Link href="/clarity-sessions">Jump on a call</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>




      {/* Section 2: Core Value - Split Feature */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-black">
                90 Days of Clarity.
                <br />
                In 90 Minutes.
              </h2>
              <p className="text-xl text-black/60 mb-6 leading-relaxed">
                The Executive Strategy Session. We rebuild your backlog, align engineering to revenue, and fix your unit economics. It&apos;s not coaching. It&apos;s architecture.
              </p>
              <Link 
                href="/consulting" 
                className="text-lg font-medium text-black hover:text-black/70 inline-flex items-center group"
              >
                Learn about Strategy Sprints
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-[32px] p-8 shadow-xl border border-black/5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-black/10">
                    <h3 className="font-semibold text-lg">Q1 Product Roadmap</h3>
                    <span className="text-sm text-black/40">12 weeks</span>
                  </div>
                  {[
                    { title: "User Onboarding Flow", status: "In Progress", color: "bg-blue-500" },
                    { title: "Payment Integration", status: "Ready", color: "bg-green-500" },
                    { title: "Analytics Dashboard", status: "Planning", color: "bg-yellow-500" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-black/5 transition-colors">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.title}</p>
                        <p className="text-xs text-black/40">{item.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: The Ecosystem - Bento Grid */}
      <section id="ecosystem" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-black">
              This is the way sh*t gets done.
            </h2>
            <p className="text-xl text-black/60">
              Everything you need to scale product velocity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Large - Span 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-white rounded-[32px] p-8 md:p-12 shadow-lg border border-black/5 hover:shadow-xl transition-shadow"
            >
              <Zap className="w-12 h-12 mb-6 text-black" />
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-black">
                The OS for your Engineering Team.
              </h3>
              <p className="text-lg text-black/60 mb-6">
                I manage your sprints, unblock devs, and own delivery. You focus on the vision.
              </p>
              <div className="bg-gradient-to-br from-black/5 to-black/10 rounded-2xl p-6 mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
                    <span className="text-sm font-bold">PM</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Fractional Head of Product</p>
                    <p className="text-xs text-black/40">Active in #engineering</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-white/50 rounded-lg p-3 text-sm">
                    ✓ Sprint planning complete for next 2 weeks
                  </div>
                  <div className="bg-white/50 rounded-lg p-3 text-sm">
                    ✓ Unblocked 3 tickets in Linear
                  </div>
                </div>
              </div>
              <Link 
                href="/consulting" 
                className="text-sm font-medium text-black/60 hover:text-black inline-flex items-center group mt-6"
              >
                Learn More
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Card 2: Tall */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-[32px] p-8 shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col justify-between bg-cover bg-center min-h-[400px]"
              style={{ backgroundImage: "url('/99p-0012.png')" }}
            >
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white">
                  Hey, I&apos;m Pablo
                </h3>
                <p className="text-base text-white">
                  I&apos;m here to help the mission succeed.
                </p>
              </div>
              <div className="relative z-10 mt-8 pt-6 border-t border-white/20">
                <p className="text-sm font-medium text-white/80 mb-4">Available Now</p>
                <Link 
                  href="/about" 
                  className="text-sm font-medium text-white hover:text-white/80 inline-flex items-center group"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Card 3: Small */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] p-8 shadow-lg border border-black/5 hover:shadow-xl transition-shadow"
            >
              <Target className="w-12 h-12 mb-6 text-black" />
              <h3 className="text-2xl font-bold tracking-tight mb-3 text-black">
                UX Diagnostics.
              </h3>
              <p className="text-base text-black/60">
                Fix conversion killers. Async.
              </p>
              <div className="mt-6 pt-4 border-t border-black/10">
                <p className="text-sm font-medium text-black/40 mb-4">The Red Flag Audit</p>
                <Link 
                  href="/consulting" 
                  className="text-sm font-medium text-black/60 hover:text-black inline-flex items-center group"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Card 4: Small */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] p-8 shadow-lg border border-black/5 hover:shadow-xl transition-shadow"
            >
              <Package className="w-12 h-12 mb-6 text-black" />
              <h3 className="text-2xl font-bold tracking-tight mb-3 text-black">
                Templates & Kits.
              </h3>
              <p className="text-base text-black/60">
                Downloadable operational speed.
              </p>
              <div className="mt-6 pt-4 border-t border-black/10">
                <p className="text-sm font-medium text-black/40 mb-4">Digital Products</p>
                <Link 
                  href="/pricing" 
                  className="text-sm font-medium text-black/60 hover:text-black inline-flex items-center group"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Social Proof */}
      <section className="pt-6 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-black">
              Trusted by founders building the future.
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-40 grayscale">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-32 h-16 bg-black/10 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-black/40">LOGO {i}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4.5: Featured Work / Case Study */}
      <section className="p-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-black/5"
          >
            <div className="grid md:grid-cols-12">
              {/* Image Side */}
              <div 
                className="md:col-span-4 bg-cover bg-center flex items-end justify-center p-12 min-h-[500px]"
                style={{ backgroundImage: "url('/99p-0001.png')" }}
              >
              </div>

              {/* Content Side */}
              <div className="md:col-span-8 p-12 md:p-16 flex flex-col justify-center">
                <div className="mb-8">
                  <p className="text-sm font-bold tracking-wider text-black/40 mb-2">CASE STUDY</p>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-black">
                    Digitizing the &quot;White Glove&quot;
                  </h3>
                  <p className="text-lg text-black/60 mb-8 leading-relaxed">
                    How a manual private aviation workflow became a self-serve revenue engine.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-xs font-bold tracking-wider text-black/40 mb-1">META</p>
                    <p className="text-sm text-black/80">Product Vision • Cross-Functional Leadership • Outcome Orientation</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-wider text-black/40 mb-1">RESULTS</p>
                    <p className="text-sm text-black/80">40% Conversion Increase • 60% Faster Confirmation • Near-Zero Compliance Errors</p>
                  </div>
                </div>

                <Link 
                  href="/experiments/aviation" 
                  className="text-base font-medium text-black hover:text-black/70 inline-flex items-center group"
                >
                  Read the case study
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4.7: Customer Personas Bento Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Startups */}
            <Link href="/consulting">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-[28px] overflow-hidden h-[320px] bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-10 py-8">
                  <div className="mb-auto pt-8">
                    <h3 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                      Startups
                    </h3>
                    <p className="text-base md:text-lg text-white/95 leading-relaxed max-w-md mx-auto">
                      Ship your MVP in weeks, not months. We define the scope and manage the build to first revenue.
                    </p>
                  </div>
                  <div className="text-white font-medium text-base flex items-center gap-2 group">
                    Launch Fast
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Card 2: Scale-ups */}
            <Link href="/consulting">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative rounded-[28px] overflow-hidden h-[320px] bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-10 py-8">
                  <div className="mb-auto pt-8">
                    <h3 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                      Scale-ups
                    </h3>
                    <p className="text-base md:text-lg text-white/95 leading-relaxed max-w-md mx-auto">
                      Turn chaos into a system. We implement the operational frameworks that let you grow without breaking.
                    </p>
                  </div>
                  <div className="text-white font-medium text-base flex items-center gap-2 group">
                    Build Systems
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Card 3: Enterprise */}
            <Link href="/consulting">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative rounded-[28px] overflow-hidden h-[320px] bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-10 py-8">
                  <div className="mb-auto pt-8">
                    <h3 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                      Enterprise
                    </h3>
                    <p className="text-base md:text-lg text-white/95 leading-relaxed max-w-md mx-auto">
                      Inject startup velocity into corporate structures. We audit workflows and unblock engineering teams.
                    </p>
                  </div>
                  <div className="text-white font-medium text-base flex items-center gap-2 group">
                    Unlock Speed
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Card 4: Founders */}
            <Link href="/consulting">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative rounded-[28px] overflow-hidden h-[320px] bg-gradient-to-br from-emerald-600 via-green-500 to-lime-500 cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-10 py-8">
                  <div className="mb-auto pt-8">
                    <h3 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                      Founders
                    </h3>
                    <p className="text-base md:text-lg text-white/95 leading-relaxed max-w-md mx-auto">
                      Stop guessing. Validate your roadmap and architecture with a veteran Product Lead before you build.
                    </p>
                  </div>
                  <div className="text-white font-medium text-base flex items-center gap-2 group">
                    Get Clarity
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Final CTA - Dark Card */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-black rounded-[32px] p-12 md:p-20 text-center shadow-2xl"
          >
            <div className="flex items-center justify-center gap-6 mb-6">
              <img 
                src="/99p-0003.png" 
                alt="Profile" 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
              />
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                Ready to upgrade your business?
              </h2>
            </div>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Book your strategy session and start shipping with velocity.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-black hover:bg-white/90 rounded-full px-10 py-7 text-lg h-auto font-semibold"
            >
              <Link href="/consulting">
                Book Your Strategy Session
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
