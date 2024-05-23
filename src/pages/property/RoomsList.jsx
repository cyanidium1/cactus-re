//import data from "./data.json";
import Page from "./[id]";

const RoomsList = () => {
  const data = {
    allProperties: [
      {
        id: 1,
        titleEnglish: "Beautiful Family House",
        _status: "available",
        _firstPublishedAt: "2023-01-15T08:00:00Z",
        titleRussian: "Красивая семейная вилла",
        roomsEnglish: "3 bedrooms, 1 living room",
        roomsRussian: "3 спальни, 1 гостиная",
        price: 350000,
        mainPhoto: {
          url: "https://example.com/photos/mainphoto1.jpg",
        },
        descriptionEnglish:
          "A beautiful house perfect for families, with a large garden and close to schools.",
        descriptionRussian:
          "Красивая вилла, идеальная для семей, с большим садом и рядом с школами.",
        city: "New York",
        area: "Brooklyn",
        stateEnglish: "New York",
        stateRussian: "Нью-Йорк",
        bathroomNumber: 2,
      },
    ],
  };
  console.log(data);
  const { allProperties } = data;
  const elements = allProperties.map((el) => {
    console.log(el);
    return (
      <li key={el.id}>
        <Page el={el} />
      </li>
    );
  });
  return <ul>{elements}</ul>;
};

export default RoomsList;
