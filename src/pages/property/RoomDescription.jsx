import { motion } from "framer-motion";

const RoomDescription = ({ descr }) => {
  const variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div>
      <p className="text-slate-400 mb-[10px]">
        Welcome to your dream home! Nestled in the heart of the city, this
        modern apartment offers the perfect blend of luxury, comfort, and
        convenience. With its sleek design and high-end finishes, this residence
        exudes sophistication from every corner. The spacious living area
        features floor-to-ceiling windows that flood the space with natural
        light, creating a warm and inviting atmosphere. Whether you're
        entertaining guests or enjoying a quiet evening at home, this living
        space provides the perfect backdrop for any occasion.
      </p>
      <p className="text-slate-400 mb-[10px]">
        The gourmet kitchen is a chef's paradise, equipped with state-of-the-art
        appliances, granite countertops, and custom cabinetry. Imagine preparing
        delicious meals while enjoying breathtaking views of the city skyline.
        Adjacent to the kitchen, the dining area is perfect for hosting dinner
        parties or intimate meals with loved ones. The bedrooms are equally
        impressive, offering a serene retreat with plush carpeting, ample closet
        space, and en-suite bathrooms that resemble a luxury spa. Each room is
        designed to provide maximum comfort and relaxation, ensuring that you
        wake up refreshed and rejuvenated every day.
      </p>
      <p className="text-slate-400 mb-[10px]">
        Step outside onto your private balcony and take in the stunning
        panoramic views of the city. This outdoor oasis is ideal for sipping
        your morning coffee, unwinding after a long day, or simply soaking up
        the vibrant atmosphere of urban living. Beyond the apartment, the
        building boasts a range of premium amenities including a fitness center,
        rooftop terrace, and concierge services, all designed to enhance your
        lifestyle. Located just steps away from top restaurants, shopping, and
        entertainment, this apartment is more than just a home – it's a gateway
        to an unparalleled living experience.
      </p>
    </div>
  );
};

export default RoomDescription;
