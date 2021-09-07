function createVideoForm(item) {
    var container = document.getElementById("video_input_form");
    container.removeChild(container.lastChild);

    // Saves the id if the video exists
    var element = document.createElement("SPAN");
    element.id = "current_video";
    element.value = item;
    container.appendChild(element);

    // Check if it is to create a new video or to edit an existing one
    if (item == '-1'){
        item = Object.create(Video);
        document.getElementById("add_button").innerHTML = "Add";
    }else{
        item = piece.score[item];
        document.getElementById("add_button").innerHTML = "Save";
    }
}
