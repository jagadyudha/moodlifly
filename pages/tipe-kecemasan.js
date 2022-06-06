import React from "react";
import Image from "next/image";

const TipeKecemasan = () => {
  return (
    <section>
      <div className="text-center md:mb-20 mb-12 max-w-lg mx-auto">
        <h1 className=" font-bold sm:text-5xl text-3xl text-center my-3">
          Tipe Kecemasan
        </h1>
        <p className="text-gray-700">
          Pentingnya mengetahui tipe-tipe kecemasan sebelum anda melakukan tes
          kecemasan
        </p>
      </div>
      {/*Gangguan Kecemasan Berpisah*/}
      <div className="md:flex flex-none items-center justify-center text-center md:text-left mt-3">
        <Image
          src="/assets/images/berpisah.png"
          alt="berpisah"
          width={300 * 1.2}
          height={300 * 1.2}
          objectFit={"cover"}
        />
        <div className=" md:ml-16 ml-0">
          <h2 className="font-bold text-2xl">Gangguan Kecemasan Berpisah</h2>
          <p className="max-w-lg my-4 text-md mx-auto">
            Gangguan Kecemasan Berpisah yaitu ketakutan atau kecemasan berlebih
            dan tidak sesuai dengan perkembangan mengenai perpisahan dan
            orang-orang yang memiliki keterikatan dengan individu.
          </p>
        </div>
      </div>

      {/*Mutisme Selektif*/}
      <div className="md:flex flex-none items-center md:flex-row-reverse justify-center text-center md:text-left mt-20 md:mt-0">
        <Image
          className=""
          src="/assets/images/mutisme.png"
          alt="mutisme"
          width={300 * 1.2}
          height={300 * 1.2}
        />
        <div className=" md:mr-16 mr-0 max-w-full">
          <h2 className=" font-bold text-2xl ">Mutisme Selektif</h2>
          <p className="max-w-lg my-4 text-md mx-auto">
            Mutisme Selektif pada DSM V diklasifikasikan dalam gangguan
            kecemasan yang memiliki ciri tidak memulai pembicaraan atau merespon
            secara timbal balik ketika diajak berbicara oleh orang lain dalam
            situasi sosial.
          </p>
        </div>
      </div>

      {/*Gangguan Fobia Spesifik*/}
      <div className="md:flex flex-none items-center justify-center text-center md:text-left my-3 mt-20 md:mt-0">
        <Image
          src="/assets/images/fobia.png"
          alt="fobia"
          width={300 * 1.2}
          height={300 * 1.2}
        />
        <div className=" md:ml-16 ml-0 justify-end">
          <h2 className=" font-bold text-2xl ">Gangguan Fobia Spesifik</h2>
          <p className="max-w-lg my-4 text-md mx-auto">
            Gangguan Fobia Spesifik merupakan gangguan kecemasan dengan ciri
            ketakutan atau kecemasan irrasional , kuat, menetap dan berlebihan
            yang terjadi secara persisten terhadap objek atau situasi tertentu
            yang dipersepsikan oleh individu sebagai sesuatu yang menakutkan
            berpotensi menimbulkan ancaman.
          </p>
        </div>
      </div>

      {/*Gangguan Kecemasan Sosial*/}
      <div className="md:flex flex-none items-center md:flex-row-reverse justify-center text-center md:text-left my-3 mt-20 md:mt-0">
        <Image
          src="/assets/images/Social Anxiety.png"
          alt="Social Anxiety"
          width={300 * 1.2}
          height={300 * 1.2}
        />
        <div className=" md:mr-16 mr-0 max-w-full">
          <h2 className=" font-bold text-2xl ">Gangguan Kecemasan Sosial</h2>
          <p className="max-w-lg my-4 text-md mx-auto">
            Gangguan Kecemasan Sosial yang sebelumnya disebut fobia sosial
            adalah jenis gangguan kecemasan yang ditandai dengan ketakutan yang
            intens, atau kecemasan terhadap situasi sosial pada saat tampil
            didepan publik. Perasaan khawatir yang selalu timbul saat melakukan
            sesuatu akan mengakibatkan munculnya kecemasan bahwa dirinya selalu
            dinilai, dikritik, atau dievaluasi secara negatif oleh orang lain
            yang membuatnya malu.
          </p>
        </div>
      </div>

      {/*Gangguan Panik*/}
      <div className="md:flex flex-none items-center justify-center text-center md:text-left my-3 mt-20 md:mt-0">
        <Image
          src="/assets/images/panic.png"
          alt="panic"
          width={300 * 1.2}
          height={300 * 1.2}
        />
        <div className=" md:ml-16 ml-0 justify-end">
          <h2 className=" font-bold text-2xl ">Gangguan Panik</h2>
          <p className="max-w-lg my-4 text-md mx-auto">
            Gangguan panik pada DSM-5 dicirikan sebagai serangan panik tak
            terduga dan berulang. Serangan panik adalah gelombang rasa takut
            yang intens atau ketidaknyamanan hebat yang tiba-tiba mencapai
            puncaknya dalam beberapa menit, dan selama itu empat (atau lebih)
            gejala berikut terjadi, yaitu jantung berdebar-debar, menjadi gila,
            nyeri atau ketidaknyamanan di dada, rasa tercekik, gangguan pada
            perut , dan lonjakan tiba-tiba dapat terjadi dari keadaan tenang
            atau keadaan cemas.
          </p>
        </div>
      </div>

      {/*Agorafobia*/}
      <div className="md:flex flex-none items-center md:flex-row-reverse justify-center text-center md:text-left my-3 mt-20 md:mt-0">
        <Image
          src="/assets/images/agorafobia.png"
          alt="agorafobia"
          width={300 * 1.2}
          height={300 * 1.2}
        />
        <div className=" md:mr-16 mr-0 max-w-full">
          <h2 className=" font-bold text-2xl ">Agorafobia</h2>
          <p className="max-w-lg my-4 text-md mx-auto">
            Agorafobia pada DSM-5 diklasifikasikan sebagai bagian dari gangguan
            kecemasan. Agorafobia ditandai dengan cemas atau takut yang
            berlebihan dan menghindar untuk berada pada tempat terbuka atau
            situasi keramaian dimana diyakini akan sulit keluar ataupun
            mendapatkan bantuan jika mengalami gejala panik yang memalukan di
            tempat atau situasi tersebut.
          </p>
        </div>
      </div>

      {/*GAD*/}
      <div className="md:flex flex-none items-center justify-center text-center md:text-left my-3 mt-20 md:mt-0">
        <Image
          src="/assets/images/gad.png"
          alt="gad"
          width={300 * 1.2}
          height={300 * 1.2}
        />
        <div className=" md:ml-16 ml-0 justify-end">
          <h2 className=" font-bold text-2xl ">
            Gangguan Kecemasan Menyeluruh
          </h2>
          <p className="max-w-lg my-4 text-md mx-auto">
            Gangguan Kecemasan Menyeluruh pada DSM-5 adalah suatu keadaan
            ketakutan atau kecemasan yang berlebihan, dan menetap
            sekurang-kurangnya selama 6 bulan mengenai sejumlah kejadian atau
            aktivitas disertai gejala somatik yang meyebabkan gangguan bermakna
            pada fungsi sosial, pekerjaan, dan fungsi-fungsi lainnya.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TipeKecemasan;
