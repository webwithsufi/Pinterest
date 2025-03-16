let array = [
  {
    name: "fashion ",
    src: "https://images.unsplash.com/photo-1727731481816-bf055858e20f?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "landscape",
    src: "https://plus.unsplash.com/premium_photo-1670530034951-b7d0428d6c9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
  },
  {
    name: "technology",
    src: "https://images.unsplash.com/photo-1727949395650-5315f1c592c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
  },
  {
    name: "food",
    src: "https://plus.unsplash.com/premium_photo-1683749808986-5887e92e88d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
  },
  {
    name: "nature",
    src: "https://plus.unsplash.com/premium_photo-1728598786780-c051b9c78ccb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "travel",
    src: "https://images.unsplash.com/photo-1719937050679-c3a2c9c67b0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "architecture",
    src: "https://images.unsplash.com/photo-1728311369940-1b36d15632dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
  },
  {
    name: "sports",
    src: "https://images.unsplash.com/photo-1728485837881-caabb4f8187c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "wildlife",
    src: "https://images.unsplash.com/photo-1728314167652-dc3c8848dd80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "music",
    src: "https://images.unsplash.com/photo-1728745045653-62547cd2294c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "people",
    src: "https://plus.unsplash.com/premium_photo-1728732954838-f1a7ec7fce46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "art",
    src: "https://images.unsplash.com/photo-1728666044033-379cbc9e8f3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "fitness",
    src: "https://images.unsplash.com/photo-1726138087393-dd09fe4b60ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "education",
    src: "https://images.unsplash.com/photo-1726609817060-1dbb2c29d609?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "hiking",
    src: "https://images.unsplash.com/photo-1728321406248-8b24f68d869d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "dancing",
    src: "https://images.unsplash.com/photo-1728307867610-a0ed88f702dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "ocean",
    src: "https://plus.unsplash.com/premium_photo-1728566648330-7ba0d675f3c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "nightlife",
    src: "https://images.unsplash.com/photo-1727200449728-fdc8899cc8ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D",
  },
];

function showCards() {
  let clutter = "";
  array.forEach(function (obj) {
    clutter += `<div class="card">
        <img src="${obj.src}" alt="">
        <h4>${obj.name}</h4>
      </div>`;
  });

  document.querySelector(".center").innerHTML = clutter;
}
showCards();

function searchRes() {
  let input = document.querySelector("input");
  input.addEventListener("input", function () {
    const value = input.value.toLocaleLowerCase();
    const result = array.filter(function (e) {
      return e.name.toLocaleLowerCase().startsWith(value);
    });

    let clutter = "";
    result.forEach(function (obj) {
      clutter += `<div class="card">
        <img src="${obj.src}" alt="">
        <h4>${obj.name}</h4>
      </div>`;
    });
    document.querySelector(".center").innerHTML = clutter;
  });
}
searchRes();

function option() {
  let input = document.querySelector("input");
  input.addEventListener("input", function () {
    const value = input.value.toLocaleLowerCase();
    if (value === "") {
      document.querySelector(".option").innerHTML = "";
      return;
    }
    const result = array.filter(function (e) {
      return e.name.toLocaleLowerCase().startsWith(value);
    });

    let clutter = "";
    result.forEach(function (obj) {
      clutter += `<div class="card">
        <h4>${obj.name}</h4>
      </div>`;
    });
    document.querySelector(".option").innerHTML = clutter;
  });
}

option();
