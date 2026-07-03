const teamMembers = [
  {
    name: "Melinda",
    role: "Front Desk & Treatment Coordinator, Dental Assistant",
    photo:
      "https://pub-89ae74d9c1ba411d8c3026dabeee57fa.r2.dev/bobwiesedental/team/Melinda.png",
    bio: "Melinda was born and raised in Garland, TX. She's always been a \"smile\" person, so she decided to attend dental assisting school with her brother and fell in love with it. Melinda has been in the dental field since 2009 and has worked with Dr. Wiese since 2015. After assisting in the clinical area for 3 years, she moved up to the front desk. Now she gets the best of both worlds here with Dr. Wiese and the team. In her spare time, she loves spending time with her gorgeous daughter Ariana and her family.",
  },
  {
    name: "Laura",
    role: "Front Office",
    photo:
      "https://pub-89ae74d9c1ba411d8c3026dabeee57fa.r2.dev/bobwiesedental/team/Laura.png",
    bio: "Laura has been a member of our team for over eight years now, and she loves working with such a great staff while also getting to know each wonderful patient over time! Originally from Sachse, she has been married 25+ years and has two sons and one daughter. When she isn't busy at the dental office, you can often find her spending quality time with loved ones, vacationing, listening to music, and watching sunsets. She additionally works with underprivileged teens each week at her church.",
  },
  {
    name: "Lori",
    role: "Registered Dental Hygienist",
    photo:
      "https://pub-89ae74d9c1ba411d8c3026dabeee57fa.r2.dev/bobwiesedental/team/Lori.png",
    bio: "Lori has been a hygienist since 1987 and has worked for Dr. Wiese since 1996. She feels like God led her to the dental field, and she knew by the time she was in 7th grade that she wanted to be in dentistry. The most rewarding part of her job is being a part of her patients' overall dental health while building relationships with them. She and her family have lived in Sachse since 2001, and she loves the small-town country feel that this community provides. Now that their 2 adult daughters have \"flown the nest\" to begin separate careers as a physical therapist (Kayla) and a teacher (Kaysie), Lori and her husband are enjoying getting healthy and fit, while finding themselves again.",
  },
  {
    name: "Tammy",
    role: "Registered Dental Assistant",
    photo:
      "https://pub-89ae74d9c1ba411d8c3026dabeee57fa.r2.dev/bobwiesedental/team/Tammy.png",
    bio: "Tammy has been involved in dentistry for many years. She loves the hands-on aspect of caring for dental needs and especially the one-on-one relationship with her dental guests. She began working for Dr. Wiese in 2003. She thrives in the detail and the multi-tasking of dentistry. Tammy married her high school sweetheart, and they have 2 beautiful children. She enjoys reading, traveling, various genres of music, her furry babies, and her lovely Bible study ladies.",
  },
];

const DentalTeam = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-[hsl(0_0%_20%)] mb-4 leading-tight">
            Dental Team
          </h2>
          <p className="text-base md:text-lg text-[hsl(0_0%_35%)] max-w-xl mx-auto leading-relaxed">
            Our Dedicated and Gentle Team Members
          </p>
          <div className="mt-5 mx-auto w-16 h-1 rounded-full bg-[hsl(184_82%_40%)]" />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-[hsl(30_25%_96%)] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              {/* Photo */}
              <div className="overflow-hidden">
                <img
                  src={member.photo}
                  alt={`Portrait of ${member.name}, ${member.role}`}
                  className="w-full h-64 object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-serif font-semibold text-[hsl(0_0%_20%)] mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-[hsl(184_82%_40%)] font-medium">
                  {member.role}
                </p>
                {member.bio && (
                  <p className="text-sm text-[hsl(0_0%_40%)] leading-relaxed mt-3 text-left">
                    {member.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DentalTeam;
