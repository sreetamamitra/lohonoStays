  export default function getNewsArticle(page, search) {
    if (search === ''){
        return [];
    }

    let compiled = Array.from(
        { length: 100 },
        (_, offset) => { //card will be iterated
            const article = {
                id: offset,
                thumbnail: `https://picsum.photos/id/${offset}/1000/800`,
                title: `Title ${offset + 1}`,
                description: "Sample Image description",
            };
            return article;
        },
    );
    if (search) {
        compiled = compiled.filter(
            each => each.title.includes(search), 
        );
    }
    compiled = compiled.slice(page * 10, (page * 10) + 10);
    console.log(compiled);
    return compiled;
  }
