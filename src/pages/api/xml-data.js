import { getData } from "@/api/api";
import { urlFor } from "@/lib/sanity";
import { create } from "xmlbuilder2";

// Функция для обработки количества комнат
const parseRooms = (rooms) => {
  if (!rooms) return "1"; // Значение по умолчанию

  const firstChar = rooms.trim().charAt(0).toLowerCase();

  if (firstChar === "s") {
    return "1"; // Студия
  }

  if (!isNaN(firstChar) && firstChar >= 1 && firstChar <= 5) {
    return firstChar; // Количество комнат от 1 до 5
  }

  return "1"; // Значение по умолчанию, если ничего не подошло
};

export default async function handler(req, res) {
  const data = await getData(0, 10000, null, null, null, null, null);
  const convertToXML = (data) => {
    console.log(data);

    const root = create({ version: "1.0" }).ele("objects");

    root.ele("version").txt("2.0");

    data.forEach((item) => {
      const object = root.ele("object");

      // Захардкоженная информация о пользователе
      const sellerInfo = object.ele("seller_info");
      const userName = sellerInfo.ele("user_name");
      userName.ele("en").txt("Alexandr");
      userName.ele("ru").txt("Александр");

      const userSurname = sellerInfo.ele("user_surname");
      userSurname.ele("en").txt("Kovalevskiy");
      userSurname.ele("ru").txt("Ковалевский");

      sellerInfo.ele("user_avatar_url").txt("");
      sellerInfo.ele("user_email").txt("cactusbusines@gmail.com"); // Захардкоженный email
      sellerInfo.ele("user_phone").txt("+355 68 557-70-16"); // Захардкоженный телефон

      // Обязательные поля
      object.ele("external_id").txt(item._id || "");
      object.ele("complex_external_id").txt(item._id || "");

      // deal_type
      if (item.sellOrRent === "Sell" || item.sellOrRent === "Rent") {
        const dealType = item.sellOrRent === "Sell" ? "sale" : "long-rent";
        object.ele("deal_type").txt(dealType);
      } else {
        object.ele("deal_type").txt("sale"); // Значение по умолчанию
      }

      object.ele("type").txt("10");
      object.ele("country_code").txt(item.countryCode || "AL"); // Значение по умолчанию

      if (item.latitude && item.longitude) {
        object.ele("lat").txt(item.latitude);
        object.ele("lng").txt(item.longitude);
      } else {
        object.ele("address").txt(item.cityName || "Unknown address"); // Адрес, если нет координат
      }
      object
        .ele("external_url")
        .txt(`https://www.cactus-realestate.com/en/property/${item._id}`);

      object.ele("currency").txt("EUR");
      object.ele("price").txt(item.price || "0");

      // Обработка количества комнат
      const roomsCount = parseRooms(item.rooms);
      object.ele("rooms").txt(roomsCount);

      object.ele("bathrooms").txt(item.bathroomNumber || "1");
      object.ele("area").txt(item.areaActual || "0");

      // Фотографии
      const photos = object.ele("photos");
      if (item.allPhotos && Array.isArray(item.allPhotos)) {
        item.allPhotos.forEach((photo) => {
          photos.ele("url").txt(urlFor(photo).url());
        });
      }

      object.ele("video").txt(item.videoUrl || "");
      object.ele("virtual_tour").txt(item.virtualTourUrl || "");

      // Описание
      const description = object.ele("description");
      description
        .ele("en")
        .txt(item.descriptionEnglish || "No description available");
      description.ele("ru").txt(item.descriptionRussian || "Нет описания");
      description.ele("de").txt("");
      description.ele("es").txt("");
      description.ele("pl").txt("");
    });

    return root.end({ prettyPrint: true });
  };

  const xmlData = convertToXML(data);

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(xmlData);
}
