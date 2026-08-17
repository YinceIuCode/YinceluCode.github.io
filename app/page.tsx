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
        <section className="pt-32 pb-20 px-6 min-h-screen flex items-center relative overflow-hidden bg-[#0a0f1c]">
           
           {/* Lưới Không Gian (Cyber Grid Background) */}
           <div 
             className="absolute inset-0 pointer-events-none z-0"
             style={{
               backgroundImage: `linear-gradient(rgba(34,197,94,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.03) 1px, transparent 1px)`,
               backgroundSize: '40px 40px',
               WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
             }}
           ></div>

           {/* Ma Trận Code Nền (Matrix Code Snippets) */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-green-500/5 font-mono text-xs md:text-sm leading-loose whitespace-pre z-0 hidden lg:block">
{`class SystemHack {
  constructor() {
    this.target = "mainframe";
    this.protocol = "ssh";
  }
  async injectPayload(data) {
    await crypto.decrypt(data);
    return connect(this.target);
  }
}
System.boot();`}
           </div>

           {/* Bảng Mạch Kết Nối (Circuit Lines SVG) */}
           <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 pointer-events-none opacity-20 hidden lg:block z-0" viewBox="0 0 400 200">
              <path d="M 50 100 H 150 L 170 80 H 250 L 270 100 H 350" fill="none" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 50 120 H 130 L 150 140 H 230 L 250 120 H 350" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="170" cy="80" r="3" fill="#22c55e" className="animate-pulse" />
              <circle cx="250" cy="80" r="3" fill="#22c55e" className="animate-pulse" />
              <circle cx="150" cy="140" r="3" fill="#3b82f6" className="animate-pulse" />
              <circle cx="230" cy="140" r="3" fill="#3b82f6" className="animate-pulse" />
           </svg>

           {/* Container chính: Đổi từ max-w-7xl sang max-w-5xl để các cột gần nhau hơn */}
           <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
            
            {/* Cột Trái (Nội dung) */}
            <div className="flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left z-20">
              <p className="text-green-500 font-mono mb-4 sm:mb-6 uppercase tracking-widest text-xs sm:text-sm">
                HELLO_WORLD // AVAILABLE FOR COLLABORATION
              </p>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-2 sm:mb-4 tracking-tighter leading-none">
                <span className="text-white">Hoàng Đức</span> <span className="text-green-500">Vinh.</span>
              </h1>
              
              <div className="text-xl sm:text-2xl md:text-3xl text-slate-400 font-mono mb-6 sm:mb-8 h-8 sm:h-10 text-center lg:text-left">
                <Typewriter
                  options={{
                    strings: ['Cybersecurity Enthusiast.', 'AI Researcher.', 'Next.js Developer.'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-8 sm:mb-10 text-xs sm:text-sm font-mono text-slate-300">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-slate-700 bg-slate-800/50">Kali Linux</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-slate-700 bg-slate-800/50">Python</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-slate-700 bg-slate-800/50">Machine Learning</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-slate-700 bg-slate-800/50">C++</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto px-4 sm:px-0 justify-center lg:justify-start">
                <a href="#projects" className="bg-green-500 text-black px-6 sm:px-8 py-3 rounded-xl font-bold hover:bg-green-400 transition-colors w-full sm:w-auto text-center">
                  {dict.hero.viewProjects}
                </a>
                <a href="#contact" className="border border-green-500 text-green-400 px-6 sm:px-8 py-3 rounded-xl font-bold hover:bg-green-500/10 transition-colors w-full sm:w-auto text-center">
                  {dict.hero.contact}
                </a>
              </div>
            </div>

            {/* Cột Phải (Hình ảnh/Avatar) - Chuyển lên trên ở chế độ Mobile */}
            <div className="flex justify-center lg:justify-end items-center relative order-1 lg:order-2 mb-4 lg:mb-0 z-20">
              {/* Background Glow */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-green-500/20 to-blue-500/20 blur-xl animate-pulse absolute"></div>
              
              {/* Decorative Bubbles (Phóng to kích thước, thêm blur nhẹ) */}
              <div className="absolute -bottom-8 md:-bottom-12 right-1/4 w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-500/30 blur-[2px] shadow-[0_0_20px_#22c55e] animate-bounce z-30" style={{ animationDuration: "3.5s" }}></div>
              <div className="absolute bottom-8 md:bottom-16 -left-8 md:-left-12 w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-500/20 blur-[3px] shadow-[0_0_25px_#3b82f6] animate-bounce z-30" style={{ animationDelay: "0.5s", animationDuration: "4s" }}></div>
              <div className="absolute -bottom-10 md:-bottom-16 left-1/4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-yellow-500/30 blur-[1px] shadow-[0_0_15px_#eab308] animate-bounce z-30" style={{ animationDelay: "1s", animationDuration: "2.8s" }}></div>

              {/* Avatar Container */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full border-2 sm:border-4 border-slate-800 bg-[#0d1117] flex items-center justify-center relative z-20 shadow-2xl overflow-hidden group">
                 {/* Lấy tạm ảnh avatar từ GitHub của bạn làm ví dụ */}
                 {/* Để dùng ảnh thật trong máy, đổi src thành src="/ten-anh-cua-ban.jpg" và chép ảnh vào thư mục 'public' */}
                 <img 
                   src="https://github.com/YinceIuCode.png" 
                   alt="Avatar" 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
              </div>
            </div>

           </div>
        </section>
        {/* About Section */}
        <section
          id="about"
          className="w-full bg-gray-900 text-white py-24"
        >
          <div className="w-full">
            <div className="text-center mb-16">
               <h2 className="inline-flex text-2xl md:text-3xl font-bold text-slate-200 mb-6 tracking-widest font-mono bg-[#0b1120] border border-slate-800 border-l-4 border-l-green-500 px-6 md:px-8 py-3 md:py-4 rounded-r-xl shadow-xl items-center justify-center gap-3 md:gap-4 group select-none">
                 <span className="text-green-500/60 text-sm md:text-base font-normal group-hover:text-green-500 transition-colors">0x01</span>
                 <span className="text-slate-600 font-normal">//</span>
                 <span className="uppercase">{dict.about.title.replace(" ", "_")}</span>
               </h2>
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
                <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm md:text-base leading-relaxed text-slate-300 overflow-x-auto whitespace-pre">
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
                 <h2 className="inline-flex text-2xl md:text-3xl font-bold text-slate-200 mb-6 tracking-widest font-mono bg-[#0b1120] border border-slate-800 border-l-4 border-l-green-500 px-6 md:px-8 py-3 md:py-4 rounded-r-xl shadow-xl items-center justify-center gap-3 md:gap-4 group select-none">
                   <span className="text-green-500/60 text-sm md:text-base font-normal group-hover:text-green-500 transition-colors">0x02</span>
                   <span className="text-slate-600 font-normal">//</span>
                   <span className="uppercase">{dict.tech.title.replace(" ", "_")}</span>
                 </h2>
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
                 <h2 className="inline-flex text-2xl md:text-3xl font-bold text-slate-200 mb-6 tracking-widest font-mono bg-[#0b1120] border border-slate-800 border-l-4 border-l-green-500 px-6 md:px-8 py-3 md:py-4 rounded-r-xl shadow-xl items-center justify-center gap-3 md:gap-4 group select-none">
                   <span className="text-green-500/60 text-sm md:text-base font-normal group-hover:text-green-500 transition-colors">0x03</span>
                   <span className="text-slate-600 font-normal">//</span>
                   <span className="uppercase">{dict.mindset.title.replace(" ", "_")}</span>
                 </h2>
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
                <h2 className="inline-flex text-2xl md:text-3xl font-bold text-slate-200 mb-6 tracking-widest font-mono bg-[#0b1120] border border-slate-800 border-l-4 border-l-green-500 px-6 md:px-8 py-3 md:py-4 rounded-r-xl shadow-xl items-center justify-center gap-3 md:gap-4 group select-none">
                 <span className="text-green-500/60 text-sm md:text-base font-normal group-hover:text-green-500 transition-colors">0x04</span>
                 <span className="text-slate-600 font-normal">//</span>
                 <span className="uppercase">{dict.projects.title.replace(" ", "_")}</span>
               </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">{dict.projects.subtitle}</p>
             </div>
             {/* Đổi group thành group/slider để không bị lây hiệu ứng xuống các thẻ con */}
             <div className="relative group/slider mt-10">
                
                {/* Nút Trái */}
                <button onClick={() => emblaApi?.scrollPrev()} className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#0b1120] border border-slate-700 text-slate-300 hover:text-green-400 hover:border-green-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 opacity-0 group-hover/slider:opacity-100 hidden md:flex">
                   <ChevronLeft size={24} />
                </button>

                {/* Khung trượt Viewport */}
                <div className="overflow-hidden -mx-4 px-4 py-8" ref={emblaRef}>
                   <div className="flex -ml-6">
                      {dict.projects.items.map((item: any, idx: number) => (
                         <div key={idx} className="flex-[0_0_85%] sm:flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] min-w-0 pl-6">
                            
                            {/* Thẻ Card */}
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
                 <h2 className="inline-flex text-2xl md:text-3xl font-bold text-slate-200 mb-6 tracking-widest font-mono bg-[#0b1120] border border-slate-800 border-l-4 border-l-green-500 px-6 md:px-8 py-3 md:py-4 rounded-r-xl shadow-xl items-center justify-center gap-3 md:gap-4 group select-none">
                   <span className="text-green-500/60 text-sm md:text-base font-normal group-hover:text-green-500 transition-colors">0x05</span>
                   <span className="text-slate-600 font-normal">//</span>
                   <span className="uppercase">{dict.resume.title.replace(" ", "_")}</span>
                 </h2>
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
              <div className="w-full h-auto pb-8 md:pb-0 md:aspect-[16/10] bg-[#0d1117] border border-slate-700/50 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] relative group">
                 {/* Fake Terminal Header */}
                 <div className="absolute top-0 left-0 w-full bg-[#1a1b26] px-4 py-2.5 flex items-center gap-2 border-b border-slate-800 z-10 transition-opacity duration-300">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <span className="text-slate-500 text-xs ml-2 font-mono flex items-center gap-2"><FileText size={12} /> vinh_cv.tex</span>
                 </div>
                 
                 {/* Embed PDF - Desktop */}
                 <div className="hidden md:block w-full h-full pt-9">
                    <iframe 
                       src="/cv.pdf#toolbar=0&navpanes=0&scrollbar=0" 
                       className="w-full h-full border-none"
                       title="Curriculum Vitae"
                    />
                 </div>

                 {/* Mobile Warning - Hidden on Desktop */}
                 <div className="md:hidden w-full pt-16 px-4 sm:px-6 font-mono text-xs sm:text-sm text-slate-400 flex flex-col items-start gap-4">
                    <p className="text-yellow-500">[WARNING]: <br/><span className="text-slate-300 mt-2 block">PDF Viewer is disabled on mobile devices for optimal experience.</span></p>
                    <p className="text-green-400">vinh_syv@portfolio:~$ <span className="text-slate-400">choose-action</span></p>
                    <div className="flex flex-col gap-3 w-full pl-4 border-l-2 border-slate-700 mt-2">
                       <a href="/cv.pdf" download="HoangDucVinh_CV.pdf" className="text-green-400 hover:text-green-300">
                          {`> [ 1 ] Download PDF`}
                       </a>
                       <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                          {`> [ 2 ] View Fullscreen`}
                       </a>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Footer / Contact */}
        <footer
          id="contact"
          className="py-24 bg-[#080d1a] border-t border-slate-800/50 font-mono"
        >
          <div className="max-w-7xl mx-auto px-6 w-full">
            {/* Tiêu đề */}
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold text-green-500 mb-4 tracking-tight flex items-center justify-center gap-2">
                 <span className="text-slate-600">{`<`}</span>
                 Contact_Protocol 
                 <span className="text-slate-600">{`/>`}</span>
               </h2>
               <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base font-sans">{dict.footer.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
               {/* Cột Trái - Connections */}
               <div className="bg-[#0b1120] border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col hover:border-slate-700 transition-colors">
                 <div className="bg-[#1a1b26] px-4 py-3 border-b border-slate-800 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <span className="text-slate-500 text-xs ml-2">bash - connections</span>
                 </div>
                 <div className="p-6 md:p-8 flex-grow">
                    <p className="text-green-400 mb-8 text-sm md:text-base">root@portfolio:~$ <span className="text-slate-300">initiate_connection --list</span></p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Nút Email */}
                      <a href="mailto:hoangducvinh.work@gmail.com" className="group flex items-center gap-4 p-4 rounded-lg border border-slate-800 bg-[#0d1117] hover:-translate-y-1 hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-300">
                        <Mail className="text-slate-500 group-hover:text-green-400 transition-colors" size={28} />
                        <div className="flex flex-col">
                           <span className="text-slate-300 font-bold text-sm tracking-wider">EMAIL</span>
                           <span className="text-slate-500 text-xs font-sans">Direct Protocol</span>
                        </div>
                      </a>
                      
                      {/* Nút Facebook */}
                      <a href="https://www.facebook.com/hoang.yince/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-lg border border-slate-800 bg-[#0d1117] hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300">
                        <FaFacebook className="text-slate-500 group-hover:text-blue-400 transition-colors" size={28} />
                        <div className="flex flex-col">
                           <span className="text-slate-300 font-bold text-sm tracking-wider">FACEBOOK</span>
                           <span className="text-slate-500 text-xs font-sans">Social Network</span>
                        </div>
                      </a>

                      {/* Nút GitHub */}
                      <a href="https://github.com/YinceIuCode" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-lg border border-slate-800 bg-[#0d1117] hover:-translate-y-1 hover:border-slate-300/50 hover:bg-slate-300/5 transition-all duration-300">
                        <FaGithub className="text-slate-500 group-hover:text-white transition-colors" size={28} />
                        <div className="flex flex-col">
                           <span className="text-slate-300 font-bold text-sm tracking-wider">GITHUB</span>
                           <span className="text-slate-500 text-xs font-sans">Code Repository</span>
                        </div>
                      </a>

                      {/* Nút LinkedIn */}
                      <a href="https://linkedin.com/in/vinh" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-lg border border-slate-800 bg-[#0d1117] hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-400/5 transition-all duration-300">
                        <FaLinkedin className="text-slate-500 group-hover:text-blue-400 transition-colors" size={28} />
                        <div className="flex flex-col">
                           <span className="text-slate-300 font-bold text-sm tracking-wider">LINKEDIN</span>
                           <span className="text-slate-500 text-xs font-sans">Professional Profile</span>
                        </div>
                      </a>
                    </div>
                 </div>
               </div>

               {/* Cột Phải - System Status */}
               <div className="bg-[#0b1120] border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col hover:border-slate-700 transition-colors">
                 <div className="bg-[#1a1b26] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-slate-500 text-xs font-mono flex items-center gap-2"><div className="w-2 h-2 rounded-sm bg-slate-600"></div> SYSTEM_INFO</span>
                    <span className="text-slate-600 text-xs">v1.0.0</span>
                 </div>
                 <div className="p-6 md:p-8 flex flex-col gap-8 flex-grow justify-center">
                    
                    <div className="flex flex-col gap-2 border-l-2 border-green-500/50 pl-4">
                       <span className="text-slate-500 text-xs tracking-widest">CURRENT_STATUS</span>
                       <span className="text-green-400 font-bold flex items-center gap-3 text-sm md:text-base">
                         <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></span> ONLINE & LISTENING
                       </span>
                    </div>

                    <div className="flex flex-col gap-2 border-l-2 border-blue-500/50 pl-4">
                       <span className="text-slate-500 text-xs tracking-widest">BASE_STATION</span>
                       <span className="text-slate-300 flex items-center gap-3 text-sm md:text-base font-sans">
                         <MapPin size={18} className="text-blue-400" /> {dict.footer.location}
                       </span>
                    </div>

                    <div className="flex flex-col gap-2 border-l-2 border-purple-500/50 pl-4">
                       <span className="text-slate-500 text-xs tracking-widest">EDUCATION_MATRIX</span>
                       <span className="text-slate-300 flex items-center gap-3 text-sm md:text-base font-sans leading-relaxed">
                         <GraduationCap size={18} className="text-purple-400 shrink-0" /> {dict.footer.uni}
                       </span>
                       
                       <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden shadow-inner">
                          <div className="bg-gradient-to-r from-purple-600 to-purple-400 h-full w-[80%] relative rounded-full"></div>
                       </div>
                       <div className="flex justify-between items-center mt-1">
                         <span className="text-slate-500 text-xs">Degree Progress</span>
                         <span className="text-purple-400 text-xs font-bold">~80%</span>
                       </div>
                    </div>

                 </div>
               </div>
            </div>

            {/* Dòng 3: Bản quyền */}
            <div className="text-center border-t border-slate-800/50 pt-8 pb-4">
              <p className="text-slate-600 text-xs md:text-sm font-sans">
                {dict.footer.copyright}
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
