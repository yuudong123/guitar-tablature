$(function () {
  // open the database
  const request = indexedDB.open("myDatabase");

  // handle errors
  request.onerror = (event) => {
    console.log("Database error:", event.target.errorCode);
  };

  // handle success
  request.onsuccess = (event) => {
    const db = event.target.result;

    // open the object store
    const transaction = db.transaction("myObjectStore", "readonly");
    const objectStore = transaction.objectStore("myObjectStore");

    // get all data from the object store
    const request = objectStore.getAll();
    request.onerror = (event) => {
      console.log("Error retrieving data:", event.target.errorCode);
    };
    request.onsuccess = (event) => {
      const data = event.target.result;

      // create a list of titles
      const ul = $("<ul></ul>");
      for (let i = 0; i < data.length; i++) {
        const li = $("<li></li>").text(data[i].title);
        li.on("click", () => {
          // execute the desired functions here
          $(".btn-reset").trigger("click");
          for (let j = 1; j < data[i].line; j++) {
            $(".btn-line-up").trigger("click");
          }
          if (data[i].input > 8) {
            for (let j = 8; j < data[i].input; j++) {
              $(".btn-input-up").trigger("click");
            }
          } else {
            for (let j = 8; j > data[i].input; j--) {
              $(".btn-input-down").trigger("click");
            }
          }
          $(".cnt-input").val(data[i].input).trigger("input");
          const chordInputs = $("#container-chord-input .chord-line .cell .ipt");
          const chords = data[i].content.split(",");
          for (let j = 0; j < chordInputs.length && j < chords.length; j++) {
            chordInputs.eq(j).val(chords[j]);
          }
        });
        ul.append(li);
      }

      // append the list to the DOM
      $("#workslist").append(ul);
    };
  };
});
