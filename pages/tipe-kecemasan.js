import React from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    name: "Gangguan Kecemasan Berpisah",
    description:
      "Gangguan Kecemasan Berpisah yaitu ketakutan atau kecemasan berlebih dan tidak sesuai dengan perkembangan mengenai perpisahan dan orang-orang yang memiliki keterikatan dengan individu.",
    image: "/assets/images/berpisah.png",
  },
  {
    id: 2,
    name: "Mutisme Selektif",
    description:
      "Mutisme Selektif pada DSM V diklasifikasikan dalam gangguan kecemasan yang memiliki ciri tidak memulai pembicaraan atau merespon secara timbal balik ketika diajak berbicara oleh orang lain dalam situasi sosial.",
    image: "/assets/images/mutisme.png",
  },
  {
    id: 3,
    name: "Gangguan Fobia Spesifik",
    description:
      "Gangguan Fobia Spesifik merupakan gangguan kecemasan dengan ciri ketakutan atau kecemasan irrasional , kuat, menetap dan berlebihan yang terjadi secara persisten terhadap objek atau situasi tertentu yang dipersepsikan oleh individu sebagai sesuatu yang menakutkan berpotensi menimbulkan ancaman.",
    image: "/assets/images/fobia.png",
  },
  {
    id: 4,
    name: "Gangguan Kecemasan Sosial",
    description:
      "Gangguan Kecemasan Sosial yang sebelumnya disebut fobia sosial adalah jenis gangguan kecemasan yang ditandai dengan ketakutan yang intens, atau kecemasan terhadap situasi sosial pada saat tampil didepan publik. Perasaan khawatir yang selalu timbul saat melakukan sesuatu akan mengakibatkan munculnya kecemasan bahwa dirinya selalu dinilai, dikritik, atau dievaluasi secara negatif oleh orang lain yang membuatnya malu.",
    image: "/assets/images/SocialAnxiety.png",
  },
  {
    id: 5,
    name: "Gangguan Panik",
    description:
      "Gangguan panik pada DSM-5 dicirikan sebagai serangan panik tak terduga dan berulang. Serangan panik adalah gelombang rasa takut yang intens atau ketidaknyamanan hebat yang tiba-tiba mencapai puncaknya dalam beberapa menit, dan selama itu empat (atau lebih) gejala berikut terjadi, yaitu jantung berdebar-debar, menjadi gila, nyeri atau ketidaknyamanan di dada, rasa tercekik, gangguan pada perut , dan lonjakan tiba-tiba dapat terjadi dari keadaan tenang atau keadaan cemas.",
    image: "/assets/images/panic.png",
  },
  {
    id: 6,
    name: "Agorafobia",
    description:
      "Agorafobia pada DSM-5 diklasifikasikan sebagai bagian dari gangguan kecemasan. Agorafobia ditandai dengan cemas atau takut yang berlebihan dan menghindar untuk berada pada tempat terbuka atau situasi keramaian dimana diyakini akan sulit keluar ataupun mendapatkan bantuan jika mengalami gejala panik yang memalukan di tempat atau situasi tersebut.",
    image: "/assets/images/agorafobia.png",
  },
  {
    id: 7,
    name: "Gangguan Kecemasan Menyeluruh",
    description:
      "Gangguan Kecemasan Menyeluruh pada DSM-5 adalah suatu keadaan ketakutan atau kecemasan yang berlebihan, dan menetap sekurang-kurangnya selama 6 bulan mengenai sejumlah kejadian atau aktivitas disertai gejala somatik yang meyebabkan gangguan bermakna pada fungsi sosial, pekerjaan, dan fungsi-fungsi lainnya.",
    image: "/assets/images/gad.png",
  },
];

const TipeKecemasan = () => {
  return (
    <section>
      <div className="text-center md:mb-24 mb-12 max-w-2xl mx-auto p-2">
        <h1 className=" font-bold sm:text-6xl text-3xl text-center my-4">
          Tipe-tipe Kecemasan
        </h1>
        <p className="text-gray-700">
          Pentingnya mengetahui tipe-tipe kecemasan sebagai edukasi
        </p>
      </div>

      <div>
        {data.map((item) => (
          <div className="md:flex border p-5 border-black border-opacity-10 mb-5 rounded-md flex-none items-center justify-center text-center md:text-left mt-3">
            <Image
              src={item.image}
              alt="berpisah"
              width={300 * 1.2}
              height={300 * 1.2}
              objectFit="contain"
            />
            <div className=" md:ml-16 ml-0">
              <h2 className="font-bold text-2xl">
                Gangguan Kecemasan Berpisah
              </h2>
              <p className="max-w-lg my-4 text-md mx-auto">
                Gangguan Kecemasan Berpisah yaitu ketakutan atau kecemasan
                berlebih dan tidak sesuai dengan perkembangan mengenai
                perpisahan dan orang-orang yang memiliki keterikatan dengan
                individu.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TipeKecemasan;
