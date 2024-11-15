// Import the Image component from next/image
import Image from 'next/image';

const HomePage = () => {
  return (
    <div>
      {/* Replace the <img> tag with Next.js <Image /> component */}
      <Image
        src="/images/logo.jpeg"  // Path to the image in the public folder
        alt="Logo"  // Alt text for the image (important for accessibility)
        width={500}  // Set width (in pixels)
        height={500}  // Set height (in pixels)
      />
    </div>
  );
}

export default HomePage;
