var person = function(){
	
}
/**********************************************/
/*GET MEMBER DATA VALUE*/

class Member{

	constructor(
                entrant_number,
				name_entrant,
				picture_title,
				picture_location,
				date_entry,
				category,
				camare_type
                 	
                 ){

		this.entrant_number = entrant_number
		this.name_entrant = name_entrant
		this.picture_title = picture_title
		this.picture_location = picture_location
		this.date_entry = date_entry
		this.category = category
		this.camare_type = camare_type
	}
        
       transformObj(){
	return{
		'entrant_number':this.entrant_number,
		'name_entrant':this.name_entrant,
		'picture_title':this.picture_title,
		'picture_location':this.picture_location,
		'date_entry':this.date_entry,
		'category':this.category,
		'camare_type':this.camare_type	
		
	}
}
}

module.exports = Member