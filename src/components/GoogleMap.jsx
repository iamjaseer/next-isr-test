
export default function LocationMap(){




  return(<>
 <div className="sm:h-[50vh] h-[250px] w-full grayscale hover:grayscale-0 opacity-60 hover:opacity-90 transition-all">
          <div
            id="embed-map-display"
            className="h-full w-full"
          >
            <iframe
              className="h-full w-full border-0"
              frameBorder={0}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.144327400792!2d55.3828662!3d25.2657299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d1a96507405%3A0x252805af6dd8924d!2sUpturnist%20Branding%20Services%20LLC!5e0!3m2!1sen!2sin!4v1721018398228!5m2!1sen!2sin"
            />
          </div>
        </div>
  </>)
}

