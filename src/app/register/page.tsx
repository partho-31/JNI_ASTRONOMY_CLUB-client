import RegistrationForm from "@/components/modules/auth/register/RegistrationForm";
import img from "../../assets/auth/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy.jpg"


const RegistrationPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            `url(${img.src})`,
        }}
      ></div>

      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
