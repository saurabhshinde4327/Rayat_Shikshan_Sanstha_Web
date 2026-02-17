"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import Header from "../components/Header";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ➡ Branch data
const branches = [
// ➡ CENTRAL REGION
{ name: "Bhadale, BHADALE, R V TARALKAR HIGHSCHOOL", region: "CENTRAL REGION" },
{ name: "Bholi, BHOLI, NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Bijawadi, BIJAWADI, KARMVEER BHAURAO PATIL VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Enkul, ENKUL, MAHARSHI SHINDE VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Gondawale Khurd, GONDAWALE KHURDA, GOPAL KRISHNA VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Jinti (Phaltan), JINTI(PHALTAN), SHRI JITOBA VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Karad, KARAD, YASHWANT HIGH SCHOOL", region: "CENTRAL REGION" },
{ name: "Kalgaon, KALGAON, NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Kale, KALE, MAHATMA GANDHI VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Karanjkhop, KARANJKHOP, NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Kashil, KASHIL, YASHWANT VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Kelghar, KELGHAR, SHRI BHAIRAVNATH VIDYAMANDIR", region: "CENTRAL REGION" },
{ name: "Kinhai, KINHAI, KARMVEER BHAURAO PATIL VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Kusurund, KUSRUND, NAMDAR BALASEHEB DESAI VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Kuthare, KUTHARE, NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Limb, LIMB, SHRIMANT CHH. PRATAPSINGH VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Mardi, MARDI, CHH. SHIVAJI VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Murud, MURUD, NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Nimsod, NIMSOD, SIDHANATH VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Nidhal, NIDHAL, HANUMAN VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Palashi (Man), PALASHI (MAN), HANUMAN VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Palashi (Khandala), PALASHI (KHANDALA), NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Pasarni, PASARNI, SHRI BHAIRAVNATH VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Pawarwadi, PAWARWADI, NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Pimpode Bk., PIMPODE BK., YASHWANTRAO CHAVAN VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Pusegaon, PUSEGAON, SHRI SEVAGIRI VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Rui (Koregaon), RUI (KOREGAON), NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Satara, SATARA, BHIMABAI AMBEDKAR KANYA VIDYAMANDIR", region: "CENTRAL REGION" },
{ name: "Satara, SATARA, ANNASAHEB KALYANI VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Sawade, SAWADE, SADGURU BABA MAHARAJ HIGH SCHOOL", region: "CENTRAL REGION" },
{ name: "Sherewadi, SHEREWADI, CHANDRAKANT BABURAO JADHAV VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Shirawade, SHIRAWADE, JOTIRLING VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Tambave, TAMBAVE, SHRIMANSHETH GANAPATRAO SURYAWANSHI VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Wadgaon-Haveli, WADAGAON-HAVELI, MAHATMA GANDHI VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Wagheshwar, WAGHESHWAR, MERU VIDYAMANDIR", region: "CENTRAL REGION" },
{ name: "Varye, VARYE, JAYSINGRAO MALHARI KARPE HIGH SCHOOL", region: "CENTRAL REGION" },
{ name: "Wawarhire, WAWARHIRE, SHRI PANLING VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Malchoundi, MALCHOUNDI, SHRI MARUTRAO VITTHALRAO MORE PANCHAKROSHI VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Khed, KHED, BAPURAO RAMAJI PATIL VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Dhondewadi, DHONDEWADI, SWA. SAINIK ANANDARAOD PATIL VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Gharalwadi, GHARALWADI, NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Umbraj, UMBRAJ, SMT. RUKMINIBAI P KADAM KANYA VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Bamnoli (Kasabe), BAMNOLI (KASABE), NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Dhokmada (Hingani), DHOKMODA (HINGANI), NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Jambhulni, JAMBHULNI, SHRI BHOJLING VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Katgun, KATGUN, MAHATMA PHULE MADHYAMIK VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Vardhangad, VARDHANGAD, SHRI VARDHINI VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Khale, KHALE, NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Jinti (Patan), JINTI (PATAN), NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Chavanwadi, CHAVANWADI, SHRI JOTIRLING ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Kharoshi, KHAROSHI, NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Wazroshi, WAZROSHI, NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Galamewadi, GALAMEWADI, SHRI NAIKBA VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Bothe, BOTHE, NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Surawadi, SURAWADI, NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Shirawali, SHIRAWALI, NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Degaon (North Solapur), DEGAON (NORTHERN SOLAPUR), NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Kardehalli, KARDEHALLI, NARSHINHA PRASHALA", region: "CENTRAL REGION" },
{ name: "Daruj, DARUJ, NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Dhuldev, DHULDEV, SHRIMAN SHETH DHANYAKUMAR RATANCHAND GANDHI VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Pimpare Bk, PIMPARE BK, (DHAIGUDE MALA) NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Ganje, GANJE, SHRI VITTHALRAO DESHMUKH MADHYAMIK VIDYALAYA", region: "CENTRAL REGION" },
{ name: "Chikalthan, CHIKHALTHAN, NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Gadegaon, GADEGAON, NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Ghoti, GHOTI, NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Kurul, KURUL, NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Marawade, MARAWADE, NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },
{ name: "Pandharwadi, PANDHARWADI, NEW ENGLISH SCHOOL", region: "CENTRAL REGION" },


  // ➡ RAIGAD REGION
   {name: "Karjat, MAHATMA GANDHI VIDYALAYA", region: "RAIGAD REGION" },
  {name: "Pali, NAGAR PARISHAD VIDYALAYA", region: "RAIGAD REGION" },
  {name: "Mangaon, V. K. HIGH SCHOOL", region: "RAIGAD REGION" },
  {name: "Goregaon, R. P. VIDYALAYA", region: "RAIGAD REGION" },
  {name: "Mahad, K. E. SOCIETY'S HIGH SCHOOL", region: "RAIGAD REGION" },
  {name: "Poladpur, VIVEKANAND VIDYALAYA", region: "RAIGAD REGION" },
  {name: "Roha, J. M. RATHI VIDYALAYA", region: "RAIGAD REGION" },
  {name: "Murud, ANJUMAN HIGH SCHOOL", region: "RAIGAD REGION" },
  {name: "Shrivardhan, S. D. VIDYALAYA", region: "RAIGAD REGION" },
  { name: "Alibag, J. M. RATHI VIDYALAYA", region: "RAIGAD REGION" },
  { name: "Pen, V. J. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Uran, S. S. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Panvel, CHHATRAPATI SHIVAJI VIDYALAYA", region: "RAIGAD REGION" },
  { name: "Panvel, V. K. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Khalapur, P. J. VIDYALAYA", region: "RAIGAD REGION" },
  { name: "Sudhagad, NEW ENGLISH SCHOOL", region: "RAIGAD REGION" },
  { name: "Kudali, S. R. V. VIDYALAYA", region: "RAIGAD REGION" },
  { name: "Kashele, NEW ENGLISH SCHOOL", region: "RAIGAD REGION" },
  { name: "Nere, NEW ENGLISH SCHOOL", region: "RAIGAD REGION" },
  { name: "Chandhai, NEW ENGLISH SCHOOL", region: "RAIGAD REGION" },
  { name: "Vihighar, NEW ENGLISH SCHOOL", region: "RAIGAD REGION" },
  { name: "Bhisegaon, NEW ENGLISH SCHOOL", region: "RAIGAD REGION" },
  { name: "Kashele, VIVEKANAND VIDYALAYA", region: "RAIGAD REGION" },
  { name: "Vavanje, NEW ENGLISH SCHOOL", region: "RAIGAD REGION" },
  { name: "Khopoli, R. K. VIDYALAYA", region: "RAIGAD REGION" },
  { name: "Khopoli, J. K. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Khandas, NEW ENGLISH SCHOOL", region: "RAIGAD REGION" },
  { name: "Pali, S. P. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Pen, P. J. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Nagothane, N. D. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Roha, G. P. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Indapur, M. S. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Revdanda, J. J. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Alibag, S. M. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Chaul, N. D. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Murud, S. N. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Diveagar, P. S. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Mhasla, A. V. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Mahad, J. B. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Mahad, J. K. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Birwadi, K. R. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Poladpur, D. N. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Shrivardhan, A. V. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Dighi, G. K. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Vadavali, NEW ENGLISH SCHOOL", region: "RAIGAD REGION" },
  { name: "Khalapur, S. K. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Karjat, B. V. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Chowk, P. V. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Panvel, B. V. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Kalamboli, NEW ENGLISH SCHOOL", region: "RAIGAD REGION" },
  { name: "Taloja, NEW ENGLISH SCHOOL", region: "RAIGAD REGION" },
  { name: "Uran, V. K. HIGH SCHOOL", region: "RAIGAD REGION" },
  { name: "Dighode, NEW ENGLISH SCHOOL", region: "RAIGAD REGION" },
  { name: "Jasai, NEW ENGLISH SCHOOL", region: "RAIGAD REGION" },
  { name: "Sonari, NEW ENGLISH SCHOOL", region: "RAIGAD REGION" },
  { name: "Kegaon, NEW ENGLISH SCHOOL", region: "RAIGAD REGION" },
  { name: "Dongari, NEW ENGLISH SCHOOL", region: "RAIGAD REGION" },

  // ➡ SOUTHERN REGION
  { name: "Banvadi, BANVADI, NEW ENGLISH SCHOOL", region: "SOUTHERN REGION" },
  { name: "Bendwadi, BENDWADI, SHIVAJI VIDYALAYA", region: "SOUTHERN REGION" },
  { name: "Bhalvani, BHALVANI, DNYANESHWAR VIDYALAYA", region: "SOUTHERN REGION" },
  { name: "Bhoisamudraga, BHOISAMUDRAGA, NEW ENGLISH SCHOOL", region: "SOUTHERN REGION" },
  { name: "Dahivadi, DAHIVADI, SAHYADRI VIDYALAYA", region: "SOUTHERN REGION" },
  { name: "Degaon, DEGAON, NEW ENGLISH SCHOOL", region: "SOUTHERN REGION" },
  { name: "Degaon, DEGAON, YASHWANT VIDYALAYA", region: "SOUTHERN REGION" },
  { name: "Dighanchi, DIGHANCHI, R. B. MADHYA VIDYALAYA", region: "SOUTHERN REGION" },
  { name: "Dhondewadi, DHONDEWADI, MAHATMA GANDHI VIDYALAYA", region: "SOUTHERN REGION" },
  { name: "Dighanchi, DIGHANCHI, LOKNETE HANUMANTDADA SHINDE VIDYALAYA", region: "SOUTHERN REGION" },
  { name: "Gardi, GARDI, NEW ENGLISH SCHOOL", region: "SOUTHERN REGION" },
  { name: "Gardi, GARDI, VIDYA MANDIR", region: "SOUTHERN REGION" },
  { name: "Gokhali, GOKHALI, MAHATMA GANDHI VIDYALAYA", region: "SOUTHERN REGION" },
  { name: "Kalamwadi, KALAMWADI, DNYANESHWAR VIDYALAYA", region: "SOUTHERN REGION" },
  { name: "Kalewadi, KALEWADI, NEW ENGLISH SCHOOL", region: "SOUTHERN REGION" },
  { name: "Karadgaon, KARADGAON, VIVEKANAND VIDYALAYA", region: "SOUTHERN REGION" },
  { name: "Kargani, KARGANI, NEW ENGLISH SCHOOL", region: "SOUTHERN REGION" },
  { name: "Khubi, KHUBI, NEW ENGLISH SCHOOL", region: "SOUTHERN REGION" },
  { name: "Kokrud, KOKRUD, SWAMI VIVEKANAND VIDYALAYA", region: "SOUTHERN REGION" },
  { name: "Koregaon, KOREGAON, MAHATMA PHULE VIDYALAYA", region: "SOUTHERN REGION" },
  { name: "Koregaon, KOREGAON, S. M. V. VIDYALAYA", region: "SOUTHERN REGION" },
  { name: "Kudnur, KUDNUR, NEW ENGLISH SCHOOL", region: "SOUTHERN REGION" },
  {  name: "Kundal, KUNDAL, NEW ENGLISH SCHOOL", region: "SOUTHERN REGION" },
  {  name: "Kundal, KUNDAL, LOKNETE G. D. BAPU LAD VIDYALAYA", region: "SOUTHERN REGION" },
  {  name: "Loni Bhapkar, LONI BHAPKAR, NEW ENGLISH SCHOOL", region: "SOUTHERN REGION" },
  {  name: "Mahalung, MAHALUNG, NEW ENGLISH SCHOOL", region: "SOUTHERN REGION" },
  {  name: "Malsiras, MALSIRAS, NEW ENGLISH SCHOOL", region: "SOUTHERN REGION" },
  {  name: "Mhasurne, MHASURNE, SHIVAJI VIDYALAYA", region: "SOUTHERN REGION" },
  {  name: "Mundhewadi, MUNDHEWADI, NEW ENGLISH SCHOOL", region: "SOUTHERN REGION" },
  {  name: "Nagaj, NAGAJ, SHRI SHIVAJI VIDYALAYA", region: "SOUTHERN REGION" },
  {  name: "Nimgaon Ketki, NIMGAON KETKI, NEW ENGLISH SCHOOL", region: "SOUTHERN REGION" },
  {  name: "Palashi, PALASHI, NEW ENGLISH SCHOOL", region: "SOUTHERN REGION" },
  {  name: "Pusegaon, PUSEGAON, NEW ENGLISH SCHOOL", region: "SOUTHERN REGION" },
  {  name: "Rajapur, RAJAPUR, NEW ENGLISH SCHOOL", region: "SOUTHERN REGION" },
  {  name: "Rajuri, RAJURI, NEW ENGLISH SCHOOL", region: "SOUTHERN REGION" },
  {  name: "Rajuri, RAJURI, VIDYADNYAN VIDYALAYA", region: "SOUTHERN REGION" },
  {  name: "Revangaon, REVANGAON, NEW ENGLISH SCHOOL", region: "SOUTHERN REGION" },

  // ➡ NORTHERN REGION
  { name: "Beed, BEED, SHRI KANKALESHWAR VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Daskhed, DASKHED, KESHAVRAJ VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Pimpri-Ghumari, PIMPARI-GHUMARI, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Adhalgaon, ADHALGAON, PANDIT JAWAHARLAL NEHARU VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Ahmednagar, AHAMEDNAGAR, LAXMIBAI BHAURAO PATIL MADHYMIK VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Akolner, AKOLNER, CHHATRAPATI SHIVAJI VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Ashoknagar, ASHOKNAGAR, BHASKARRAO GALANDE PATIL VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Astagaon, ASTAGAON, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Belapur-Bedagi, BELAPUR-BADAGI, SHRI RAMDAS HIGH SCHOOL", region: "NORTHERN REGION" },
  { name: "Chapadgaon, CHAPADGAON, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Chasnali, CHASNALI, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Chincholi-Gurav, CHINCHOLI GURAV, SHRI CHH SHIVAJI VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Dhamori, DHAMORI, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Ghotan, GHOTAN, JANATA VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Ganeshnagar, GANESHNAGAR, SHRI GANESH VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Ganore, GANORE, CHH SHIVAJI VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Hange, HANGE, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Javale Jamkhed, JAWALE (JAMKHED), SHRI CHHATRAPATI SHIVAJI VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Karajgaon, KARAJGAON, SHRI CHHATRAPATI SHIVAJI VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Karjat, KARJAT, SOU S.N. SONMALI KANYA VIDYAMANDIR", region: "NORTHERN REGION" },
  { name: "Kedgaon, KEDGAON, SHRI AMBIKA VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Khandala, KHANDALA, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Kopargaon, KOPARGAON, KARMAVEER BHAURAO PATIL VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Kopargaon, KOPARGAON, DR. C.M. MEHATA KANYA VIDYAMANDIR", region: "NORTHERN REGION" },
  { name: "Korhale BK., KORHALE, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Kumbhari, KUMBHARI, GURUVARY TUKARAM BABA VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Loni, LONI, PADAMSHRI DR. VITTHALRAO VIKHE PATIL VIDYALAY", region: "NORTHERN REGION" },
  { name: "Madhe Wadgaon, MADHE WADAGAON, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Mhalunge BK., MALUNJE BK, A K AUTI VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Naur, NAUR, S S GANGAGIRI VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Pimpri Nirmal, PIMPARI NIRMAL, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Ravande, RAVANDE, SHRI SHIVSHANKAR VIDYAMANDIR", region: "NORTHERN REGION" },
  { name: "Salbatpur, SALABATPUR, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Sawantsar, SAWANTSAR, JANATA ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Sawalvihir, SAWAL VIHIR, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Shinde, SHINDE, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Srirampur, SHRIRAMPUR, D D KACHOLE VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Takali Kandeshwari, TAKALI KHANDESHWARI (KARJAT), NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Undirgaon, UNDIRGAON, BHASKARRAO GALANDE PATIL VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Wadala Mahadev, WADALA MAHADEV, SHRI CHHATRAPATI SHIVAJI VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Wari, WARI, SHRI RAMESHWAR VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Yesgaon, YESGAON, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Naigaon, NAIGAON, PANCHAKROSHI VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Jamkhed, JAMKHED, SHRI NAGESH VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Alsunde, ALASUNDE, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Bojade, BHOJADE, SOU SUSHILAMAI SHANKARRAO KALE MADYA. VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Karanji BK, KARANJI BK, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Rahata, RAHATA, SHARADA VIDYAMANDIR (KANYASHALA)", region: "NORTHERN REGION" },
  { name: "Chandangaon, CHANDGAON, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Deulgaon Siddhi, DEULGAON SIDHHI, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Kasthi, KASHTI, JANATA KANYA VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Adagaon, ADAGAON, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Dapur, DAPUR, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Janori, JANORI, MAHATMA PHULE VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Pangari, PANGARI, SHRI SANT HARIBABA VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Sakore, SAKORE, KARMAVEER BHAHURAO PATIL VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Vanasgaon, VANASGAON, SHRI CHHATRAPATI SHIVAJI VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Somthane, SOMTHANE, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Rui, RUI (NIPHAD), NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Satral, SATRAL, SMT KONDABAI NANASAHEB KADU-PATIL KANYA VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Takali Dho, TAKALI DHOKESHWAR, KANYA VIDYAMANDIR", region: "NORTHERN REGION" },
  { name: "Shrigonda, SHRIGONDA, SHRIMANT RAJMATA VIJAYARAJE SHINDE", region: "NORTHERN REGION" },
  { name: "Dhotre BK, DHOTRE BK, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Pingalwade, PINGALWADE, KARMAVER BHAURAO PATIL VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Hatola, HATOLA, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Kinhi, KINHI, SADGURU ONKARBABA VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Khadaki, KHADAKI, SHRI TULAJA BHAVANI VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Deulgaon G, DEULGAON GALANDA, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Nigdol, NIGDOL, SHARADRAOJI PAWAR MADHYAMIK VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Kersane, KERSANE, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Chougaon, CHOUGAON, SHARADRAOJI PAWAR MADHYAMIK VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Pravaranagar, PRAVARANAGAR, MAHATMA GANDHI VIDYALAYA (GIRLS)", region: "NORTHERN REGION" },
  { name: "Manori, MANORI, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Babulwade, BABHULWADE, KEDARESHWAR VIDYALAYA", region: "NORTHERN REGION" },
  { name: "Kalas, KALAS, NEW ENGLISH SCHOOL", region: "NORTHERN REGION" },
  { name: "Takali Vinchur, TAKALI WINCHUR, NEW ENGLISH SCHOOL (NIPHAD)", region: "NORTHERN REGION" }, 
  
  // ➡ WESTERN REGION
  { name: "Ambegaon, AMBEGAON, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Awasari BK., AWASARI BK., KARMAVEER BHAURAO PATIL VIDYALAYA", region: "WESTERN REGION" },
  { name: "Belhe, BELHE, KARMAVEER BHAURAO PATIL VIDYALAYA", region: "WESTERN REGION" },
  { name: "Bhorgiri, BHORGIRI, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Chas, CHAS, SHREE JAGDAMBA VIDYALAYA", region: "WESTERN REGION" },
  { name: "Chikhali, CHIKHALI, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Ghodnadi, GHODNADI, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Gokulwadi, GOKULWADI, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Junnar, JUNNAR, LATE NANA SAHEB JADHAV VIDYALAYA", region: "WESTERN REGION" },
  { name: "Kadamvasti, KADAMWASTI, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Kalamb, KALAMB, KARMAVEER BHAURAO PATIL VIDYALAYA", region: "WESTERN REGION" },
  { name: "Kharpudi (Bk), KHARPUDI (BK), NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Manchar, MANCHAR, KARMAVEER BHAURAO PATIL VIDYALAYA", region: "WESTERN REGION" },
  { name: "Narayangaon, NARAYANGAON, LATE RANJITRAO PATIL VIDYALAYA", region: "WESTERN REGION" },
  { name: "Nighoje, NIGHOJE, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Otale, OTALE, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Pabal, PABAL, VITTHALRAO SHINDE VIDYALAYA", region: "WESTERN REGION" },
  { name: "Rajgurunagar, RAJGURUNAGAR, KARMAVEER BHAURAO PATIL VIDYALAYA", region: "WESTERN REGION" },
  { name: "Shivnawri, SHIVNAWRI, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Takali Dhokeshwar, TAKALI DHOKESHWAR, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Velhe, VELHE, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Wada, WADA, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },

  { name: "Awasari Kh, SHRI BHAIRAVNATH VIDYALAYA", region: "WESTERN REGION" },
  { name: "Belsar, BALSIDHANATH VIDYALAYA", region: "WESTERN REGION" },
  { name: "Chaskaman, JAWAHAR VIDYALAYA", region: "WESTERN REGION" },
  { name: "Dorlewadi, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Garade, SHANKARRAO DHONE VIDYALAYA", region: "WESTERN REGION" },
  { name: "Indapur, SOU KASTURABAI SHRIPATI KADAM VIDYALAYA", region: "WESTERN REGION" },
  { name: "Khadakwasala, YASHWANT VIDYALAYA", region: "WESTERN REGION" },
  { name: "Korhale Bk (Baramati), SHRI SIDHESHWAR HIGH SCHOOL", region: "WESTERN REGION" },
  { name: "Manjari (Haveli), K. K. GHULE VIDYALAYA", region: "WESTERN REGION" },
  { name: "Murti, SHRI CHH. SHIVAJI VIDYALAYA", region: "WESTERN REGION" },
  { name: "Neera, SOU L R SHAHA KANYA VIDYAMANDIR", region: "WESTERN REGION" },
  { name: "Pangare, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Pimpalgaon Khadaki, SHIRAM VIDYALAYA", region: "WESTERN REGION" },
  { name: "Redani, KARMVEER BHAURAO PATIL VIDYALAYA", region: "WESTERN REGION" },
  { name: "Shelgaon, SHRI SANT MUKTABAI VIDYALAYA", region: "WESTERN REGION" },
  { name: "Shetphalgadhe, NAGESHWAR VIDYALAYA", region: "WESTERN REGION" },
  { name: "Shivari, MAHATMA JYOTIRAO PHULE VIDYALAYA", region: "WESTERN REGION" },
  { name: "Waphgaon, MAHARAJA YASHVANTRAO HOLKAR VIDYALAYA", region: "WESTERN REGION" },
  { name: "Vetale, SHRI SIDHESHWAR VIDYALAYA", region: "WESTERN REGION" },
  { name: "Pandavnagar (Pune), HUTATMA R. VIDYALAYA GIRLS", region: "WESTERN REGION" },
  { name: "Pimpri Waghire, KANYA VIDYALAYA", region: "WESTERN REGION" },
  { name: "Nazare Pathar, SHRI NAGESHWAR VIDYALAYA", region: "WESTERN REGION" },
  { name: "Dehu, KANYA VIDYALAYA", region: "WESTERN REGION" },
  { name: "Jambhori, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Malin, KRISHNA YASHAWANT BHALCHIM MADHYAMIK VIDYALAYA", region: "WESTERN REGION" },
  { name: "Kolawadi, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Asane, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Waghale, KALIKAMATA VIDYALAYA", region: "WESTERN REGION" },
  { name: "Delwadi, JAY MALHAR VIDYALAYA", region: "WESTERN REGION" },
  { name: "Annapur, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Kurwandi, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Shirur, NES ENGLISH SCHOOL (SEC. ENG MED)", region: "WESTERN REGION" },
  { name: "Hadapsar Pune 28, SADHANA SEC ENGLISH MEDIUM SCHOOL", region: "WESTERN REGION" },
  { name: "Tandali, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Bhoire, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Bhosari Sandvik Colony, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Bhosari Indrayaninagar, LATE LAXMIBAI RAMBHAU LANDAGE VIDYALAYA", region: "WESTERN REGION" },
  { name: "Gojubawi, NEW ENGLISH SCHOOL", region: "WESTERN REGION" },
  { name: "Shirur, ENGLISH MEDIUM SCHOOL (SEC)", region: "WESTERN REGION" }


];

export default function Branches() {
  const [branchSearch, setBranchSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // ➡ Filter logic for search
  const filteredBranches = branches.filter(
    (b) =>
      b.name.toLowerCase().includes(branchSearch.toLowerCase()) ||
      b.region.toLowerCase().includes(branchSearch.toLowerCase())
  );

  // ➡ Pagination settings
  const itemsPerPage = 40;
  const totalPages = Math.ceil(filteredBranches.length / itemsPerPage);

  // ➡ Calculate start/end index
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBranches = filteredBranches.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <HeaderSection />
      <Header />
      <Navbar />

      {/* Hero Banner */}
      <section className="relative w-full h-[100px]">
        <Image
          src="/images/academics-banner.jpg"
          alt="Branches"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <h3 className="text-white text-3xl md:text-4xl font-extrabold drop-shadow-lg uppercase">
            Branch Details
          </h3>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-teal-900 text-white py-3">
        <div className="container mx-auto flex justify-center space-x-2 text-sm">
          <Link href="/" className="flex items-center space-x-1 hover:text-yellow-400">
            <span>🏠</span>
            <span>Home</span>
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-yellow-400 uppercase">Branches</span>
        </div>
      </div>

      {/* Branch Table */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-4">Branch Details</h2>

        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search branches..."
            className="px-3 py-2 w-1/3 border border-gray-400 rounded-md focus:ring-2 focus:ring-teal-600 focus:outline-none"
            value={branchSearch}
            onChange={(e) => {
              setBranchSearch(e.target.value);
              setCurrentPage(1); // Reset to page 1 when searching
            }}
          />
        </div>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full border-collapse text-sm bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="border px-4 py-3">Sr. No.</th>
                <th className="border px-4 py-3">Branch Name</th>
                <th className="border px-4 py-3">Branch Region</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y divide-gray-200">
              {currentBranches.length > 0 ? (
                currentBranches.map((b, idx) => (
                  <tr key={idx} className="hover:bg-gray-100">
                    <td className="border px-4 py-3 text-center font-semibold">
                      {startIndex + idx + 1}
                    </td>
                    <td className="border px-4 py-3">{b.name}</td>
                    <td className="border px-4 py-3 text-center">{b.region}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-4 text-gray-500">
                    No matching branches found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ✅ Pagination UI */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? "bg-teal-700 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                currentPage < totalPages && setCurrentPage(currentPage + 1)
              }
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Next
            </button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
