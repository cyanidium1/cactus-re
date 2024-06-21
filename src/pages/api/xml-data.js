import { getData } from "@/api/api";
import { urlFor } from "@/lib/sanity";
import { create } from "xmlbuilder2";

export default async function handler(req, res) {
  const data = await getData(0, 10000, null, null, null, null, null);

  const convertToXML = (data) => {
    const root = create({ version: "1.0" }).ele("objects");

    root.ele("version").txt("2.0");

    data.forEach((item) => {
      const object = root.ele("object");

      object
        .ele("seller_info")
        .ele("user_name")
        .ele("en")
        .txt("Alexandr")
        .up()
        .ele("ru")
        .txt("Александр")
        .up()
        .ele("de")
        .txt("...")
        .up()
        .ele("es")
        .txt("...")
        .up()
        .ele("pl")
        .txt("...")
        .up()
        .ele("user_surname")
        .ele("en")
        .txt("Kovalevskiy")
        .up()
        .ele("ru")
        .txt("Ковалевский")
        .up()
        .ele("de")
        .txt("...")
        .up()
        .ele("es")
        .txt("...")
        .up()
        .ele("pl")
        .txt("...")
        .up()
        .ele("user_avatar_url")
        .txt("")
        .up()
        .ele("user_email")
        .txt("cactusbusines@gmail.com")
        .up()
        .ele("user_phone")
        .txt("+355 68 557-70-16");

      object.ele("external_id").txt("");
      object.ele("complex_external_id").txt("");
      object.ele("deal_type").txt(item.sellOrRent);
      object.ele("type").txt("");
      object.ele("country_code").txt("");
      object.ele("lat").txt("");
      object.ele("lng").txt("");
      object.ele("address").txt(item.cityName);
      object.ele("external_url").txt("");
      object.ele("currency").txt("EUR");
      object.ele("price").txt(item.price);
      object.ele("floor_num").txt("14");
      object.ele("floors_cnt").txt("14");
      object.ele("building_year").txt("2024");
      object.ele("rooms").txt(item.roomsEnglish);
      object.ele("bedrooms").txt("");
      object.ele("bathrooms").txt(item.bathroomNumber);
      object.ele("wc").txt("1");
      object.ele("area").txt(item.areaActual);
      object.ele("area_living").txt("");
      object.ele("area_ground").txt("");
      object.ele("area_kitchen").txt("");

      const photos = object.ele("photos");
      if (item.allPhotos && Array.isArray(item.allPhotos)) {
        item.allPhotos.forEach((photo) => {
          console.log(`photo`, photo);
          photos.ele("url").txt(urlFor(photo).url());
        });
      }
      photos.ele("url").txt("...");

      object.ele("video").txt("");
      object.ele("virtual_tour").txt("");

      const tags = object.ele("tags");
      tags.ele("tag").txt("");
      tags.ele("tag").txt("");
      tags.ele("tag").txt("");

      const rentTags = object.ele("tags");
      const food = rentTags.ele("food");
      food.ele("tag").txt("");
      food.ele("tag").txt("");

      const indoors = rentTags.ele("indoors");
      indoors.ele("tag").txt("");
      indoors.ele("tag").txt("");

      const outdoors = rentTags.ele("outdoors");
      outdoors.ele("tag").txt("");
      outdoors.ele("tag").txt("");

      const description = object.ele("description");
      description.ele("en").txt(item.descriptionEnglish);
      description.ele("ru").txt(item.descriptionRussian);
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
