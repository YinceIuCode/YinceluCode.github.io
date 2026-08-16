"use client";

import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";
import Typewriter from 'typewriter-effect';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Marquee from 'react-fast-marquee';
import { Mail, MapPin, GraduationCap, Shield, Brain, Terminal, Compass, ChevronLeft, ChevronRight, Layers, Target, Zap, Link2, Users, BookOpen, Sparkles, FileText, Download, Maximize } from 'lucide-react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  const { dict } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

  const techStack = [
     "C++", "Python", "Kali Linux", "VMware", "Next.js", 
     "Tailwind CSS", "Git", "GitHub", "Visual Studio", "LaTeX"
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6 bg-[#0b1120]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
            {/* Cột Trái (Nội dung chính) */}
            <div className="flex flex-col items-start z-10">
              <p className="text-green-400 font-mono mb-4">HELLO_WORLD // AVAILABLE FOR COLLABORATION</p>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                <span className="text-white">Hoàng Đức</span> <span className="text-green-400">Vinh.</span>
              </h1>
              
              <div className="text-2xl md:text-3xl text-slate-400 font-mono mb-8 h-10">
                <Typewriter
                  options={{
                    strings: ['Cybersecurity Enthusiast.', 'AI Researcher.', 'Next.js Developer.'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-slate-300">Kali Linux</span>
                <span className="rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-slate-300">Python</span>
                <span className="rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-slate-300">Machine Learning</span>
                <span className="rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-slate-300">C++</span>
              </div>

              <div className="flex gap-4 mt-8">
                <a href="#projects" className="bg-green-500 text-black px-8 py-3 rounded-xl font-bold hover:bg-green-400 transition-colors">
                  {dict.hero.viewProjects}
                </a>
                <a href="#contact" className="border border-green-500 text-green-400 px-8 py-3 rounded-xl font-bold hover:bg-green-500/10 transition-colors">
                  {dict.hero.contact}
                </a>
              </div>
            </div>

            {/* Cột Phải (Hình ảnh/Avatar) */}
            <div className="flex justify-center relative z-10 mt-12 lg:mt-0">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-green-500/20 to-blue-500/20 blur-xl animate-pulse absolute"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-slate-800 bg-[#0d1117] flex items-center justify-center relative z-20 shadow-2xl">
                <Shield size={80} className="text-green-500/50" />
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-8"
        >
          <div className="w-full">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{dict.about.title}</h2>
               <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">{dict.about.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6">
              {/* Cột Trái (Terminal) */}
              <div className="max-w-2xl mx-auto w-full rounded-xl overflow-hidden bg-[#0d1117] border border-slate-700/50 shadow-2xl text-left">
                {/* Header */}
                <div className="bg-slate-800/80 px-4 py-3 flex items-center gap-2 border-b border-slate-700/50">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-slate-400 text-xs ml-2 font-mono">vinh_profile.json</span>
                </div>

                {/* Body */}
                <div className="p-6 font-mono text-sm md:text-base leading-relaxed text-slate-300">
                  <div><span className="text-yellow-300">{`{`}</span></div>
                  <div className="ml-4"><span className="text-pink-400">"name"</span>: <span className="text-green-400">"Hoàng Đức Vinh"</span>,</div>
                  <div className="ml-4"><span className="text-pink-400">"role"</span>: <span className="text-green-400">"{dict.about.role}"</span>,</div>
                  <div className="ml-4"><span className="text-pink-400">"education"</span>: <span className="text-green-400">"{dict.about.education}"</span>,</div>
                  <div className="ml-4"><span className="text-pink-400">"passions"</span>: [<span className="text-green-400">{dict.about.passions}</span>],</div>
                  <div className="ml-4"><span className="text-pink-400">"hobbies"</span>: [<span className="text-green-400">{dict.about.hobbies}</span>],</div>
                  <div className="ml-4"><span className="text-pink-400">"current_status"</span>: <span className="text-green-400">"{dict.about.status}"</span></div>
                  <div><span className="text-yellow-300">{`}`}</span></div>
                </div>
              </div>

              {/* Cột Phải (Thẻ nổi) */}
              <div className="flex flex-col gap-4">
                {dict.about.skills.map((skill: any, index: number) => {
                  const icons: any = { Shield, Brain, Terminal, Compass };
                  const Icon = icons[skill.icon];
                  return (
                    <div key={index} className="group bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-5 rounded-2xl flex items-center gap-5 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(34,197,94,0.12)] hover:border-green-500/30 transition-all duration-300 cursor-pointer">
                      <div className="w-14 h-14 shrink-0 rounded-full bg-slate-900/80 flex items-center justify-center text-slate-300 group-hover:text-green-400 transition-colors">
                        {Icon && <Icon size={24} />}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-1">{skill.title}</h3>
                        <p className="text-slate-400 font-mono text-sm">{skill.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Section */}
        <section id="tech" className="py-24 bg-[#080d1a] border-y border-slate-800/50">
           <div className="max-w-7xl mx-auto px-6">
              {/* Tiêu đề */}
              <div className="text-center mb-16">
                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{dict.tech.title}</h2>
                 <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">{dict.tech.subtitle}</p>
              </div>

              {/* Lưới Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {dict.tech.items.map((item: any, idx: number) => {
                    // Map string to Icon component
                    const Icon = item.icon === 'Shield' ? Shield : item.icon === 'Terminal' ? Terminal : item.icon === 'Brain' ? Brain : Layers;
                    
                    return (
                       <div key={idx} className="bg-[#0f1523] border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                          
                          {/* Icon */}
                          <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                             <Icon className="text-slate-300 group-hover:text-white" size={24} />
                          </div>

                          {/* Nội dung */}
                          <h3 className="text-xl font-bold text-white mb-3">{item.name}</h3>
                          <p className="text-slate-400 text-sm leading-relaxed mb-8">{item.desc}</p>

                          {/* Vạch kẻ màu phát sáng ở đáy */}
                          <div className="mt-auto pt-4">
                             <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                                <div className={`h-full w-2/3 ${item.color} group-hover:w-full transition-all duration-500 shadow-[0_0_10px_currentColor]`}></div>
                             </div>
                          </div>
                       </div>
                    );
                 })}
              </div>
           </div>
        </section>

        {/* Mindset Section */}
        <section id="mindset" className="w-full bg-[#0b1120] py-24">
           <div className="max-w-7xl mx-auto px-6">
              {/* Tiêu đề */}
              <div className="text-center mb-16">
                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{dict.mindset.title}</h2>
                 <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">{dict.mindset.subtitle}</p>
              </div>

              {/* Lưới Card Mindset */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {dict.mindset.items.map((item: any, idx: number) => {
                    const icons: any = { Target, Zap, Link2, Users, BookOpen, Sparkles };
                    const Icon = icons[item.icon];
                    
                    return (
                       <div key={idx} className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:-translate-y-1 hover:border-slate-600 hover:shadow-xl hover:shadow-slate-900/50 transition-all duration-300 flex flex-col h-full group">
                          
                          <div className="flex items-center gap-3 mb-4">
                             {Icon && <Icon className="text-slate-300 group-hover:text-white transition-colors" size={24} />}
                             <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">{item.title}</h3>
                          </div>

                          <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{item.desc}</p>

                          <div className="mt-auto">
                             <span className={`inline-flex px-3 py-1 text-xs font-mono rounded-full border ${item.color}`}>
                                {item.tag}
                             </span>
                          </div>
                       </div>
                    );
                 })}
              </div>
           </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full bg-gray-900 py-24">
          <div className="max-w-7xl mx-auto px-6">
             <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{dict.projects.title}</h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">{dict.projects.subtitle}</p>
             </div>
             {/* Đổi group thành group/slider để không bị lây hiệu ứng xuống các thẻ con */}
             <div className="relative group/slider mt-10">
                
                {/* Nút Trái */}
                <button onClick={() => emblaApi?.scrollPrev()} className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#0b1120] border border-slate-700 text-slate-300 hover:text-green-400 hover:border-green-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 opacity-0 group-hover/slider:opacity-100 hidden md:flex">
                   <ChevronLeft size={24} />
                </button>

                {/* Khung trượt Viewport - Thêm -mx-4 px-4 py-8 để không bị cắt bóng (shadow) khi thẻ nảy lên */}
                <div className="overflow-hidden -mx-4 px-4 py-8" ref={emblaRef}>
                   <div className="flex gap-6">
                      {dict.projects.items.map((item: any, idx: number) => (
                         <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0">
                            
                            {/* Thẻ Card - Đổi group thành group/card */}
                            <a href={item.link} className="block h-full bg-[#0a0a0a] border border-slate-800 rounded-xl relative overflow-hidden group/card hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(34,197,94,0.15)] hover:border-green-500/50 transition-all duration-300 flex flex-col font-mono">
                               
                               {/* Fake Terminal Header */}
                               <div className="bg-[#1a1b26] px-4 py-2.5 flex items-center gap-2 border-b border-slate-800">
                                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                  <span className="text-slate-500 text-xs ml-2">bash - root</span>
                               </div>

                               {/* Terminal Body */}
                               <div className="p-6 flex flex-col grow">
                                  <div className="flex items-start gap-2 mb-4 text-base md:text-lg">
                                     <h3 className="text-white font-bold group-hover/card:text-green-400 transition-colors line-clamp-2">{item.name}</h3>
                                  </div>
                                  
                                  {/* Sub-description as output */}
                                  <div className="text-slate-400 text-sm mb-6 grow pl-4 border-l-2 border-slate-800">
                                     <p className="line-clamp-3">{item.sub}</p>
                                  </div>

                                  {/* Tags */}
                                  <div className="flex flex-wrap gap-2 mt-auto">
                                     {item.tech.split(' · ').map((tech: string, i: number) => (
                                        <span key={i} className="text-xs font-mono text-green-400/90 bg-green-950/40 px-2.5 py-1 rounded border border-green-500/20">
                                           {tech}
                                        </span>
                                     ))}
                                  </div>
                               </div>
                            </a>
                         </div>
                      ))}
                   </div>
                </div>

                {/* Nút Phải */}
                <button onClick={() => emblaApi?.scrollNext()} className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#0b1120] border border-slate-700 text-slate-300 hover:text-green-400 hover:border-green-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 opacity-0 group-hover/slider:opacity-100 hidden md:flex">
                   <ChevronRight size={24} />
                </button>
             </div>
          </div>
        </section>

        {/* Resume / CV Section */}
        <section id="resume" className="w-full bg-[#0b1120] py-24 relative z-10 border-t border-slate-800/50">
           <div className="max-w-5xl mx-auto px-6">
              {/* Tiêu đề */}
              <div className="text-center mb-16">
                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{dict.resume.title}</h2>
                 <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
                    {dict.resume.subtitle}
                 </p>
                 
                 {/* Action Buttons */}
                 <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <a 
                       href="/cv.pdf" 
                       download="HoangDucVinh_CV.pdf"
                       className="group flex items-center gap-2 bg-[#1a1b26] hover:bg-slate-800 text-slate-300 hover:text-white px-6 py-3 rounded-lg border border-slate-700 hover:border-green-500/50 transition-all font-mono text-sm shadow-lg"
                    >
                       <Download size={18} className="text-green-400 group-hover:-translate-y-1 transition-transform" />
                       {dict.resume.download}
                    </a>
                    <a 
                       href="/cv.pdf" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="group flex items-center gap-2 bg-[#1a1b26] hover:bg-slate-800 text-slate-300 hover:text-white px-6 py-3 rounded-lg border border-slate-700 hover:border-green-500/50 transition-all font-mono text-sm shadow-lg"
                    >
                       <Maximize size={18} className="text-green-400 group-hover:scale-110 transition-transform" />
                       {dict.resume.fullscreen}
                    </a>
                 </div>
              </div>

              {/* PDF Viewer Container */}
              <div className="w-full aspect-[1/1.4] md:aspect-[16/10] bg-[#0d1117] border border-slate-700/50 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] relative group">
                 {/* Fake Terminal Header */}
                 <div className="absolute top-0 left-0 w-full bg-[#1a1b26] px-4 py-2.5 flex items-center gap-2 border-b border-slate-800 z-10 transition-opacity duration-300">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <span className="text-slate-500 text-xs ml-2 font-mono flex items-center gap-2"><FileText size={12} /> vinh_cv.tex</span>
                 </div>
                 
                 {/* Embed PDF */}
                 <div className="w-full h-full pt-9">
                    <iframe 
                       src="/cv.pdf#toolbar=0&navpanes=0&scrollbar=0" 
                       className="w-full h-full border-none"
                       title="Curriculum Vitae"
                    />
                 </div>
              </div>
           </div>
        </section>

        {/* Footer */}
        <footer
          id="contact"
          className="py-24 bg-[#080d1a] border-t border-slate-800/50 flex flex-col items-center justify-center gap-12"
        >
          {/* Tiêu đề */}
          <div className="text-center w-full px-6">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{dict.footer.title}</h2>
             <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">{dict.footer.subtitle}</p>
          </div>

          {/* Dòng 1: Mạng xã hội */}
          <div className="flex items-center gap-8">
            <a href="mailto:hoangducvinh.work@gmail.com" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
              <Mail size={24} />
            </a>
            <a href="https://www.facebook.com/hoang.yince/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://github.com/YinceIuCode" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/vinh" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Dòng 2: Học vấn & Vị trí */}
          <div className="flex flex-col items-center gap-3 text-slate-400 text-sm text-center">
            <span className="flex items-center gap-2">
              <GraduationCap size={16} /> {dict.footer.uni}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> {dict.footer.location}
            </span>
          </div>

          {/* Dòng 3: Bản quyền */}
          <p className="text-slate-500 text-sm">
            {dict.footer.copyright}
          </p>
        </footer>
      </main>
    </div>
  );
}
