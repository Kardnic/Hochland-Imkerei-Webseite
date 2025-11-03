export default function MapCard() {
  return (
    <div className="bg-white rounded-lg shadow-card p-4 text-center mt-8">
      <h3 className="font-semibold text-forest mb-2">Hier findet ihr uns</h3>
      <div className="w-full h-64 overflow-hidden rounded-lg border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.973080059995!2d6.334403477085994!3d50.79731107165728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf67854d3c09b7%3A0x267a91532920b990!2sHochland%20Imkerei%20Heistern!5e0!3m2!1sde!2sde!4v1739555853620!5m2!1sde!2sde"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Hochland Imkerei Heistern"
        ></iframe>
      </div>
    </div>
  );
}
