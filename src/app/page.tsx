"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Shield, Dumbbell, Users, Flame, Activity, HeartPulse, Trophy, Award, BadgeCheck, Phone, MapPin, Clock, Mail, Menu, X, ArrowRight, Check, Target, Zap, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const BUSINESS = { name: "ARMOR GYM", phone: "(205) 201-4384", phoneHref: "tel:+12052014384", address: "7001 Crestwood Blvd, Birmingham, AL 35210", addressQuery: "7001 Crestwood Blvd, Birmingham, AL 35210", email: "hello@armorgymbham.com" };

const NAV_LINKS = [
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "500+", label: "Members Training" },
  { value: "40+", label: "Classes Weekly" },
  { value: "15+", label: "Years in Birmingham" },
  { value: "12", label: "Certified Coaches" },
];

const PROGRAMS = [
  { icon: Dumbbell, title: "Strength & Conditioning", body: "Build raw power and functional strength with periodized barbell programming written by certified coaches who track your progress week to week." },
  { icon: Target, title: "Personal Training", body: "One-on-one coaching tailored to your body, your schedule, and your goals. Move better, lift heavier, and stay accountable to a plan built for you." },
  { icon: Flame, title: "Group Fitness Classes", body: "High-energy HIIT, circuit, and conditioning sessions led by coaches who push you alongside a community that shows up for every single rep." },
  { icon: Trophy, title: "Powerlifting & Barbell Club", body: "Competitive programming and coached platform practice for lifters chasing their next PR. From your first meet to your next state record." },
];

const FEATURES = [
  { icon: Shield, title: "24/7 Access", body: "Your key works around the clock. Train on your time — early morning, late night, or whenever the motivation hits." },
  { icon: Users, title: "Expert Coaching", body: "Every coach is nationally certified with years of hands-on experience. They know your name, your goals, and how to get you there." },
  { icon: HeartPulse, title: "Recovery Zone", body: "Sauna, contrast therapy, and mobility tools included in every membership. Train hard and recover smart." },
  { icon: Award, title: "Premium Equipment", body: "Rogue, Eleiko, and Prime. Full powerlifting platforms, competition benches, and a dedicated turf zone for athletic work." },
];

const TESTIMONIALS = [
  { name: "Marcus T.", role: "Member since 2019", quote: "\"Armor completely changed how I think about training. The coaching here is next level — they care about form, progress, and keeping you healthy.\"", rating: 5, image: null },
  { name: "Sarah K.", role: "Member since 2021", quote: "\"I walked in not knowing how to squat and now I'm pulling over 300 lbs. The community here is unreal — everyone cheers for each other.\"", rating: 5, image: null },
  { name: "James R.", role: "Member since 2020", quote: "\"Best gym in Birmingham. Period. The equipment is top-tier, the coaches actually know what they're doing, and the members keep you motivated every session.\"", rating: 5, image: null },
];

const PRICING = [
  { name: "Starter", price: "$49", period: "/month", features: ["Gym access during staffed hours", "Access to all classes", "Locker & shower access", "Free introductory session" ], cta: "Start Free Trial", highlighted: false },
  { name: "Core", price: "$79", period: "/month", features: ["24/7 gym access", "Unlimited classes", "One monthly coaching session", "Recovery zone access", "Nutrition starter guide" ], cta: "Start Free Trial", highlighted: true },
  { name: "Elite", price: "$149", period: "/month", features: ["Everything in Core", "Weekly one-on-one coaching", "Custom program design", "Priority class booking", "Recovery zone unlimited", "Nutrition & lifestyle coaching" ], cta: "Start Free Trial", highlighted: false },
];

function Nav({ mobileOpen, setMobileOpen }: { mobileOpen: boolean; setMobileOpen: (v: boolean) => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2">
            <Shield className="w-7 h-7 text-amber-500" />
            <span className="text-xl font-bold tracking-tight">ARMOR</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (<a key={l.href} href={l.href} className="text-sm text-zinc-400 hover:text-white transition-colors">{l.label}</a>))}
            <Button size="sm" className="bg-amber-600 hover:bg-amber-500 text-white">Start Free Trial</Button>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-zinc-300">{mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
        </div>
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {NAV_LINKS.map((l) => (<a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-zinc-400 hover:text-white">{l.label}</a>))}
            <Button className="w-full bg-amber-600 hover:bg-amber-500 text-white mt-2">Start Free Trial</Button>
          </div>
        )}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <img src="/gym/hero.jpg" alt="Armor Gym interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <BadgeCheck className="w-12 h-12 text-amber-500 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            FORGE YOUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">STRONGEST</span>
            {" "}SELF
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Birmingham's premier strength training facility. World-class equipment, expert coaching, and a community that pushes you to be better every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-500 text-white text-base px-8 py-6">Claim Your Free Week <ArrowRight className="ml-2 w-5 h-5" /></Button>
            <Button size="lg" variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 text-base px-8 py-6">View Programs</Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronRight className="w-6 h-6 text-zinc-500 rotate-90 animate-bounce" />
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-16 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-amber-500 mb-1">{s.value}</div>
              <div className="text-sm text-zinc-500">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="programs" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Programs</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">Whatever your goal, we have a program built to get you there with expert guidance every step of the way.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-amber-700/50 transition-all">
                <Icon className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{p.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Built for <span className="text-amber-500">Birmingham</span></h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>Founded in 2009 at a small warehouse gym off Crestwood Boulevard, Armor Gym grew from a single squat rack and a dream into Birmingham's premier strength training destination.</p>
              <p>We moved to our current 12,000 sq-ft facility at 7001 Crestwood Blvd in 2015, bringing in Rogue and Eleiko equipment, a dedicated turf zone, competition powerlifting platforms, and a full recovery suite.</p>
              <p>What hasn't changed: we're still a coaching-first facility. Every member gets a program tailored to their goals, and every coach knows your name. Iron sharpens iron, and we sharpen each other.</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              {["Rogue Equipment", "Eleiko Plates", "Competition Benches", "Turf Zone", "Recovery Suite"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400">{tag}</span>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-xl">
            <img src="/gym/about.jpg" alt="Armor Gym facility" className="w-full h-80 sm:h-96 object-cover" />
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-2 text-amber-500 mb-1"><MapPin className="w-4 h-4" /><span className="text-sm">{BUSINESS.address}</span></div>
              <div className="flex items-center gap-2 text-zinc-400"><Clock className="w-4 h-4" /><span className="text-sm">Open 24/7 for members</span></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Why Armor?</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">Because you deserve more than a key fob and a treadmill. Here's what sets us apart.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-16 h-16 bg-amber-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{f.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Real Members, Real Results</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">Don't take our word for it — hear from the people who train here every day.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="flex gap-1 mb-4">{Array.from({ length: t.rating }).map((_, j) => (<Star key={j} className="w-4 h-4 fill-amber-500 text-amber-500" />))}</div>
              <p className="text-zinc-300 mb-6 leading-relaxed">{t.quote}</p>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-zinc-500">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Membership() {
  return (
    <section id="membership" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Membership</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">Choose the plan that fits your goals. All memberships include a free trial week — no commitment required.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative rounded-xl p-6 border ${p.highlighted ? "border-amber-600 bg-amber-600/5" : "border-zinc-800 bg-zinc-900/50"}`}>
              {p.highlighted && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-xs font-semibold px-3 py-1 rounded-full">Most Popular</div>}
              <h3 className="text-lg font-semibold mb-1">{p.name}</h3>
              <div className="mb-6"><span className="text-3xl font-bold">{p.price}</span><span className="text-zinc-500 text-sm">{p.period}</span></div>
              <ul className="space-y-3 mb-8">{p.features.map((f) => (<li key={f} className="flex items-start gap-2 text-sm text-zinc-400"><Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />{f}</li>))}</ul>
              <Button className={`w-full ${p.highlighted ? "bg-amber-600 hover:bg-amber-500 text-white" : "bg-zinc-800 hover:bg-zinc-700 text-zinc-300"}`}>{p.cta}</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const data = { name: form.get("name"), email: form.get("email"), message: form.get("message") };
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (res.ok) { toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." }); (e.target as HTMLFormElement).reset(); }
      else { toast({ title: "Something went wrong", description: "Please try again or call us directly.", variant: "destructive" }); }
    } catch {
      toast({ title: "Network error", description: "Please check your connection and try again.", variant: "destructive" });
    } finally { setSubmitting(false); }
  }

  return (
    <section id="contact" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Get in Touch</h2>
            <p className="text-zinc-400 mb-10 leading-relaxed">Ready to start your journey? Stop by for a tour, or send us a message and we'll get back to you within 24 hours.</p>
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Call us", value: BUSINESS.phone, href: BUSINESS.phoneHref },
                { icon: Mail, label: "Email", value: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
                { icon: MapPin, label: "Visit", value: BUSINESS.address, href: `https://www.google.com/maps/search/${encodeURIComponent(BUSINESS.addressQuery)}` },
                { icon: Clock, label: "Hours", value: "24/7 for members | Staffed: M-F 6a-10p, Sat-Sun 8a-6p" },
              ].map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm text-zinc-500">{item.label}</div>
                      <div className="text-zinc-300">{item.value}</div>
                    </div>
                  </div>
                );
                return item.href ? <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block hover:bg-zinc-800/50 p-2 -mx-2 rounded-lg transition-colors">{content}</a> : <div key={item.label}>{content}</div>;
              })}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 space-y-6">
              <div><Label htmlFor="name" className="text-zinc-400">Name</Label><Input id="name" name="name" placeholder="Your name" required className="bg-zinc-800/50 border-zinc-700" /></div>
              <div><Label htmlFor="email" className="text-zinc-400">Email</Label><Input id="email" name="email" type="email" placeholder="you@example.com" required className="bg-zinc-800/50 border-zinc-700" /></div>
              <div><Label htmlFor="message" className="text-zinc-400">Message</Label><Textarea id="message" name="message" placeholder="How can we help you?" required className="bg-zinc-800/50 border-zinc-700 min-h-[120px]" /></div>
              <Button type="submit" disabled={submitting} className="w-full bg-amber-600 hover:bg-amber-500 text-white">{submitting ? "Sending..." : "Send Message"}</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-amber-500" /><span className="font-bold">ARMOR GYM</span></div>
          <div className="text-sm text-zinc-600">&copy; {new Date().getFullYear()} Armor Gym. All rights reserved. 7001 Crestwood Blvd, Birmingham, AL</div>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Hero />
      <Stats />
      <Programs />
      <About />
      <WhyUs />
      <Testimonials />
      <Membership />
      <Contact />
      <Footer />
    </div>
  );
}
