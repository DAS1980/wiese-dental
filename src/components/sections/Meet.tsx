const Meet = () => {
  return (
    <section className="py-20 md:py-32 bg-[hsl(30_25%_92%)]">
      <div className="container mx-auto px-4">
<div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Meet Dr. Robert Wiese */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-[hsl(0_0%_20%)] mb-6 leading-tight">
              Meet Dr. Robert Wiese
            </h2>
            <div className="space-y-5 text-base text-[hsl(0_0%_20%)] leading-relaxed">
              <p>
                Dr. Wiese graduated from Baylor College of Dentistry in 1983. He opened his private practice in Garland that same year and began delivering restorative, cosmetic, and general dentistry services to address a wide range of dental needs. He uses advanced techniques and quality materials to create smiles that look natural and deliver outstanding beauty and longevity.
              </p>
              <p>
                He is a member of the American Dental Association (ADA), Texas Dental Association (TDA), Dallas Study Club and American association of Implant Dentistry (AAID). Dr. Wiese's postgraduate study includes classes at the esteemed Center for Aesthetic Restorative Dentistry (CARD), where he stays current with the latest techniques in cosmetic and reconstructive dentistry.
              </p>
              <p>
                Dr. Wiese and his wife, Kim, have been married since 1978. They have two sons and twin daughters. The doctor values the time he spends with his family and is involved with several missionary and church-related ministries.
              </p>
            </div>
          </div>

          {/* Right Column - Card with photo + content */}
          <div>
            <div className="relative bg-background rounded-lg shadow-md overflow-hidden">
              {/* Doctor Image */}
              <div>
                <img
                  src="https://pub-89ae74d9c1ba411d8c3026dabeee57fa.r2.dev/bobwiesedental/hero/New%20Head%20Shot%20No%20water%20mark.png"
                  alt="Portrait of Dr. Robert G. Wiese smiling in professional attire"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
{/* Signature */}
                <div className="text-center">
                  <span className="text-2xl font-serif font-semibold text-[hsl(0_0%_20%)]">
                    Robert G. Wiese, DDS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meet;
