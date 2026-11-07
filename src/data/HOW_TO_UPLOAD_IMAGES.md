# How to Add and Upload Your Pictures (Events & Galleries)

### Structure Overview:
```
Category (e.g. Corporate & Events, Portraits & Lifestyle, Celebrations, Sports)
  └── Events (e.g. Sasol Bridge to Work, WeThinkCode_, 5FM, UJ Sigma Cup 10s)
        └── Photos (All pictures taken for that set event)
```

Folder organization in `public/images/`:
- `public/images/corporateAndEvents/` (e.g. `5fm/`, `GautengAICommunity/`, `SosalBrigdeToWork/`, `WeThinkCode/`)
- `public/images/potraits/` (e.g. `GautengCityCollegePeagent/`, `PersonalPotraits/`)
- `public/images/celebrations/`
- `public/images/sports/` (e.g. `SigmaCup/`)

---

### Step 1: Place your image files in `public/images/<category>/<event>/`
Save your photos in the corresponding folder, for example:
`public/images/corporateAndEvents/SosalBrigdeToWork/my-photo.jpg`

---

### Step 2: Add pictures to an event

Open the category file where you want to add photos:
- [corporateEvents.js](file:///c:/Users/tlhon/Documents/projects/tlhongdigital/src/data/categories/corporateEvents.js)
- [portraitsLifestyle.js](file:///c:/Users/tlhon/Documents/projects/tlhongdigital/src/data/categories/portraitsLifestyle.js)
- [celebrations.js](file:///c:/Users/tlhon/Documents/projects/tlhongdigital/src/data/categories/celebrations.js)
- [sports.js](file:///c:/Users/tlhon/Documents/projects/tlhongdigital/src/data/categories/sports.js)

#### To add pictures to an EXISTING event:
Find the event in the `events` array, and add a new photo to its `photos` list:
```javascript
{
  id: 'sasol-8',
  src: '/images/corporateAndEvents/SosalBrigdeToWork/my-new-photo.jpg',
  alt: 'Photo description',
  title: 'Keynote Speaker',
  caption: 'Auditorium Stage'
},
```

#### To create a NEW event:
Add a new event block inside the `events: [...]` array:
```javascript
{
  id: 'my-new-conference',
  slug: 'my-new-conference',
  title: 'Annual Tech Conference',
  tag: 'Conference',
  location: 'Sandton Convention Centre',
  date: 'November 2026',
  coverImage: '/images/corporateAndEvents/MyNewConference/cover.jpg',
  description: 'Three days of executive roundtables, keynote speeches, and brand showcases.',
  photos: [
    {
      id: 'photo-1',
      src: '/images/corporateAndEvents/MyNewConference/cover.jpg',
      alt: 'Delegates in hall',
      title: 'Opening Plenary',
      caption: 'Main Hall',
      featured: true
    },
    {
      id: 'photo-2',
      src: '/images/corporateAndEvents/MyNewConference/photo2.jpg',
      alt: 'Speaker on stage',
      title: 'Innovation Keynote',
      caption: 'Stage 1'
    }
  ]
}
```

---

### How Redirection Works

1. **Portfolio Page**: Shows 5 clickable pictures:
   - **All Work** (`/#/gallery/all`)
   - **Corporate & Events** (`/#/gallery/corporate-events`)
   - **Portraits & Lifestyle** (`/#/gallery/portraits-lifestyle`)
   - **Celebrations** (`/#/gallery/celebrations`)
   - **Sports** (`/#/gallery/sports`)

2. **Inside a Category Gallery**:
   Clicking any event picture opens **all the pictures for that set event**.

3. **Inside an Event**:
   Clicking any picture opens the full-screen Lightbox with next/previous controls and keyboard arrow support.
