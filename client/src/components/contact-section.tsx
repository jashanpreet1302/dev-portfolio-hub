import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { PERSONAL_INFO } from "@/lib/constants";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: PERSONAL_INFO.email,
      bgColor: "bg-violet-600/20",
      iconColor: "text-violet-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: PERSONAL_INFO.phone,
      bgColor: "bg-cyan-600/20",
      iconColor: "text-cyan-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: PERSONAL_INFO.location,
      bgColor: "bg-emerald-600/20",
      iconColor: "text-emerald-400"
    }
  ];

  const socialLinks = [
    { href: "https://github.com/jashanpreet1302", icon: "fab fa-github", hoverColor: "hover:bg-violet-600/20" },
    { href: "#", icon: "fab fa-linkedin", hoverColor: "hover:bg-blue-600/20" },
    { href: "#", icon: "fab fa-twitter", hoverColor: "hover:bg-cyan-600/20" },
  ];

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Let's collaborate on your next project or discuss opportunities
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-violet-400 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${info.bgColor} rounded-full flex items-center justify-center`}>
                      <info.icon className={`w-5 h-5 ${info.iconColor}`} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              

            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold text-violet-400 mb-6">Send Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">First Name</label>
                  <Input
                    {...register("firstName")}
                    placeholder="John"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-violet-500"
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Last Name</label>
                  <Input
                    {...register("lastName")}
                    placeholder="Doe"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-violet-500"
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Email</label>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="john@example.com"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-violet-500"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Subject</label>
                <Input
                  {...register("subject")}
                  placeholder="Project Discussion"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-violet-500"
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Message</label>
                <Textarea
                  {...register("message")}
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-violet-500 resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full portfolio-button"
              >
                <Send className="mr-2 w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
