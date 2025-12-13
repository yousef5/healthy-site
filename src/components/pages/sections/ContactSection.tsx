"use client";

import { motion } from "framer-motion";
import {
  Building,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

interface ContactSectionProps {
  isArabic: boolean;
  headingFontStyle: React.CSSProperties;
  bodyFontStyle: React.CSSProperties;
}

export default function ContactSection({
  isArabic,
  headingFontStyle,
  bodyFontStyle,
}: ContactSectionProps) {
  const contactMethods = [
    {
      id: "phone",
      titleEn: "Phone",
      titleAr: "الهاتف",
      valueEn: "+20 050 2338989",
      valueAr: "+٢٠ ٠٥٠ ٢٣٣٨٩٨٩",
      icon: <Phone size={16} />,
    },
    {
      id: "email",
      titleEn: "Email",
      titleAr: "البريد الإلكتروني",
      valueEn: "info@healthy.com.eg",
      valueAr: "info@healthy.com.eg",
      icon: <Mail size={16} />,
    },
    {
      id: "address",
      titleEn: "Office Address",
      titleAr: "عنوان المكتب",
      valueEn: "17 Sherif El-Rady St., Old Tawriel, Mansoura, Egypt",
      valueAr: "١٧ شارع شريف الراضي، عمارة هيلثي، توريل القديمة، المنصورة، مصر",
      icon: <Building size={16} />,
    },
    {
      id: "hours",
      titleEn: "Working Hours",
      titleAr: "ساعات العمل",
      valueEn: "Sunday - Thursday: 9AM - 5PM",
      valueAr: "الأحد - الخميس: ٩ ص - ٥ م",
      icon: <Clock size={16} />,
    },
  ];

  return (
    <section
      id="contact-section"
      className="w-full py-12 md:py-16 bg-card/5 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl opacity-70 -mr-10 -mt-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl opacity-70 -ml-10 -mb-10 pointer-events-none"></div>

      <div className="container max-w-5xl px-4 md:px-6 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-1"
              style={headingFontStyle}
            >
              {isArabic ? "تواصل معنا" : "Contact Us"}
            </h2>
            <p
              className="text-muted-foreground max-w-md mx-auto text-center text-xs"
              style={bodyFontStyle}
            >
              {isArabic
                ? "نحن هنا للإجابة على استفساراتك"
                : "We're here to answer your inquiries"}
            </p>
          </motion.div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-5 max-w-4xl mx-auto">
          {/* Left Column - Contact Information */}
          <div className="lg:col-span-5 space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-lg p-3 shadow-sm border border-border/40"
            >
              <div>
                <h3
                  className="text-sm font-semibold mb-2 flex items-center gap-1.5"
                  style={headingFontStyle}
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  {isArabic ? "معلومات الاتصال" : "Contact Information"}
                </h3>
                <div className="h-px w-full bg-border/40 mb-2"></div>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {contactMethods.map((method) => (
                  <div key={method.id} className="flex items-start gap-2">
                    <div className="p-1 rounded-md bg-primary/10 text-primary mt-0.5 shrink-0">
                      {method.icon}
                    </div>
                    <div>
                      <h4
                        className="text-xs font-medium"
                        style={headingFontStyle}
                      >
                        {isArabic ? method.titleAr : method.titleEn}
                      </h4>
                      <p
                        className="text-muted-foreground text-xs leading-tight"
                        style={bodyFontStyle}
                      >
                        {isArabic ? method.valueAr : method.valueEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-2 pt-2 border-t border-border/40">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-medium" style={headingFontStyle}>
                    {isArabic ? "تابعنا" : "Follow Us"}
                  </h3>
                  <div className="flex space-x-1.5 rtl:space-x-reverse">
                    {[
                      {
                        name: "Facebook",
                        url: "https://www.facebook.com/HealthyCure2020",
                        icon: Facebook,
                      },
                      {
                        name: "Instagram",
                        url: "https://www.instagram.com/healthycure_insta/",
                        icon: Instagram,
                      },
                      {
                        name: "YouTube",
                        url: "https://www.youtube.com/@healthycure105",
                        icon: Youtube,
                      },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                        aria-label={social.name}
                      >
                        <social.icon size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-lg p-3 shadow-sm border border-border/40"
            >
              <div className="flex items-center gap-1.5 mb-2">
                <div className="p-1 rounded-md bg-primary/10 text-primary shrink-0">
                  <MessageSquare size={14} />
                </div>
                <h3 className="text-sm font-semibold" style={headingFontStyle}>
                  {isArabic ? "رسالة سريعة" : "Quick Message"}
                </h3>
              </div>

              <form className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder={isArabic ? "الاسم" : "Name"}
                    className="w-full px-2.5 py-1 rounded-md bg-muted/50 border border-border focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 text-xs"
                  />
                  <input
                    type="email"
                    placeholder={isArabic ? "البريد الإلكتروني" : "Email"}
                    className="w-full px-2.5 py-1 rounded-md bg-muted/50 border border-border focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 text-xs"
                  />
                </div>
                <div>
                  <textarea
                    rows={2}
                    placeholder={isArabic ? "رسالتك" : "Your Message"}
                    className="w-full px-2.5 py-1 rounded-md bg-muted/50 border border-border focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 text-xs"
                  ></textarea>
                </div>
                <div>
                  <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-2.5 py-1 rounded-md transition-colors duration-200 font-medium text-xs">
                    {isArabic ? "إرسال" : "Send Message"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Right Column - Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 relative h-[280px] lg:h-full"
          >
            <div className="bg-card rounded-lg shadow-sm border border-border/40 overflow-hidden h-full">
              <div className="relative rounded-lg overflow-hidden h-full">
                {/* Google Maps iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d854.5059661773285!2d31.39739915704749!3d31.050921962661984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDAzJzAzLjMiTiAzMcKwMjMnNTAuNiJF!5e0!3m2!1sen!2sus!4v1719146792517!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                  className="absolute inset-0 w-full h-full"
                ></iframe>

                {/* Map Pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group z-10 pointer-events-none">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse">
                    <div className="w-6 h-6 bg-primary/30 rounded-full absolute -inset-1.5 animate-ping"></div>
                  </div>

                  {/* Location Popup - More compact */}
                  <div className="absolute bottom-full mb-1.5 -left-[75px] w-[150px] bg-card shadow-lg rounded-md p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-border/40 text-xs">
                    <div className="flex items-start gap-1">
                      <div className="shrink-0 text-primary mt-0.5">
                        <MapPin size={10} />
                      </div>
                      <div>
                        <h4
                          className="font-medium text-[10px]"
                          style={headingFontStyle}
                        >
                          {isArabic ? "المقر الرئيسي" : "Headquarters"}
                        </h4>
                        <p
                          className="text-muted-foreground text-[10px]"
                          style={bodyFontStyle}
                        >
                          {isArabic
                            ? "١٧ شارع شريف الراضي، عمارة هيلثي"
                            : "17 Sherif El-Rady St."}
                        </p>
                      </div>
                    </div>
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-card absolute -bottom-1 left-[75px] transform -translate-x-1/2"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Controls - More compact */}
            <div className="absolute bottom-1.5 right-1.5 bg-card/90 backdrop-blur-sm shadow-sm rounded-md p-0.5 border border-border/40">
              <div className="flex items-center gap-0.5">
                <button className="p-0.5 rounded hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </button>
                <button className="p-0.5 rounded hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
