import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const ContactSection = () =>{
  const Link = ({ logo: Logo, text, href }) => {
    return (
        <a href={href} target="_blank"
          className="inline-flex items-center px-6 py-2 transtition-all ease-in duration-300 hover:translate-y-2 cursor-pointer"
        ><Logo className="mr-2"/>{text}</a>
    );
  }
  return (
  <section id="contact" className="flex flex-col justify-center items-center w-full h-[80vh] px-2 bg-main-gray">
      <div className="text-center">
        <h2 className="text-main-white text-6xl font-bold  font-raleway ">Let's work together...</h2>
        <p className="italic text-xl p-4 text-main-white ">How do you take your coffee?</p>
      </div>
      <div className="flex justify-center flex-wrap text-main-white text-3xl mt-4" >
        <Link href={"https://www.facebook.com/profile.php?id=100087135086667"}logo={FaFacebook} text="Facebook" />
        <Link href={"https://github.com/sagarlc929"}logo={FaGithub} text="Github" />
        <Link href={"https://x.com/its_summer_haze"}logo={FaSquareXTwitter} text="X" />
        <Link href={"mailto:sagarlamichhane929@gmail.com"}logo={IoIosMailUnread} text="Send me a mail" />
        <Link href={"https://www.linkedin.com/in/sagar-lamichhane-5b2097252/"}logo={FaLinkedin} text="Linkedin" />
      </div>
  </section>
  );

}
export default ContactSection;
