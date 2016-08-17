class Note {
	constructor(note_content, author) {
		this.content = note_content;
		this.author = author;
	}
	
	setNote(note_content) {
		this.content = note_content;
	}
}

class NotesApplication {
	constructor() {
		this.note = [];
	}
	
	create(note_content){
		this.note.push(note_content);
	}
	
	listNotes() {
		var contents = "";
		for (var i = 0; i < this.notes.length; i++) {
			contents = contents + "Note ID: " + i + "\n";
			contents = contents + this.notes[i].text + "\n";
			contents = contents + "By Author " +  this.notes[i].author + "\n\n";
		}
		console.log(contents);
	}
	
}