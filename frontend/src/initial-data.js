const initialData = {
    tasks: {
        'task-1': {id: 'task-1', title: 'First task', datetime: '30.05.21 / 12:45', user: 'Greg', description: "This is text that users will enter into the card when saving and it will be saved to the database. I'm baby cardigan copper mug aesthetic XOXO DIY meggings kitsch. XOXO banh mi drinking vinegar, shoreditch ramps cold-pressed poutine edison bulb copper mug iceland cloud bread kitsch microdosing subway tile squid. Readymade pour-over health goth stumptown fashion axe. Chillwave air plant YOLO cred, raw denim tumeric activated charcoal wayfarers williamsburg marfa. Etsy tote bag vexillologist sriracha. Godard aesthetic man bun fingerstache 3 wolf moon pork belly pour-over YOLO twee. Subway tile viral affogato pok pok polaroid listicle. Adaptogen ugh fashion axe viral. Vaporware biodiesel drinking vinegar you probably haven't heard of them keytar, iPhone pabst lomo +1 locavore listicle actually godard. Vexillologist paleo dreamcatcher woke vaporware."},
        'task-2': {id: 'task-2', title: 'Second task', datetime: '30.05.21 / 12:45', user: 'Greg', description: "This is text that users will enter into the card when saving and it will be saved to the database. I'm baby cardigan copper mug aesthetic XOXO DIY meggings kitsch. XOXO banh mi drinking vinegar, shoreditch ramps cold-pressed poutine edison bulb copper mug iceland cloud bread kitsch microdosing subway tile squid. Readymade pour-over health goth stumptown fashion axe. Chillwave air plant YOLO cred, raw denim tumeric activated charcoal wayfarers williamsburg marfa. Etsy tote bag vexillologist sriracha. Godard aesthetic man bun fingerstache 3 wolf moon pork belly pour-over YOLO twee. Subway tile viral affogato pok pok polaroid listicle. Adaptogen ugh fashion axe viral. Vaporware biodiesel drinking vinegar you probably haven't heard of them keytar, iPhone pabst lomo +1 locavore listicle actually godard. Vexillologist paleo dreamcatcher woke vaporware. This is text that users will enter into the card when saving and it will be saved to the database. I'm baby cardigan copper mug aesthetic XOXO DIY meggings kitsch. XOXO banh mi drinking vinegar, shoreditch ramps cold-pressed poutine edison bulb copper mug iceland cloud bread kitsch microdosing subway tile squid. Readymade pour-over health goth stumptown fashion axe. Chillwave air plant YOLO cred, raw denim tumeric activated charcoal wayfarers williamsburg marfa. Etsy tote bag vexillologist sriracha. Godard aesthetic man bun fingerstache 3 wolf moon pork belly pour-over YOLO twee. Subway tile viral affogato pok pok polaroid listicle. Adaptogen ugh fashion axe viral. Vaporware biodiesel drinking vinegar you probably haven't heard of them keytar, iPhone pabst lomo +1 locavore listicle actually godard. Vexillologist paleo dreamcatcher woke vaporware."},
        'task-3': {id: 'task-3', title: 'Third task', datetime: '30.05.21 / 12:45', user: 'Greg'},
        'task-4': {id: 'task-4', title: 'Forth task', datetime: '30.05.21 / 12:45', user: 'Greg'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Submitted',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
        'column-2': {
            id: 'column-2',
            title: 'In progress',
            taskIds: [],
        },
        'column-3': {
            id: 'column-3',
            title: 'QA',
            taskIds: [],
        },
        'column-4': {
            id: 'column-4',
            title: 'Complete',
            taskIds: [],
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
    newCard: false,
};

export default initialData;