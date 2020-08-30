let movies = [
    {
        id : 'tt0111161',
        title : 'The Shawshank Redemption',
        rank : 1
    },
    {
        id : 'tt0068646',
        title : 'The Godfather',
        rank : 2
    },
    {
        id : 'tt0071562',
        title : 'The Godfather: Part II',
        rank : 3
    },
    {
        id : 'tt0110912',
        title : 'Pulp Fiction',
        rank : 4
    },
    {
        id : 'tt0060196',
        title : 'The Good, the Bad and the Ugly',
        rank : 5
    },
    {
        id : 'tt0468569',
        title : 'The Dark Knight',
        rank : 6
    },
    {
        id : 'tt0050083',
        title : '12 Angry Men',
        rank : 7
    },
    {
        id : 'tt0108052',
        title : 'Schindler\'s List',
        rank : 8
    },
    {
        id : 'tt0167260',
        title : 'The Lord of the Rings: The return of the King',
        rank : 9
    },
    {
        id : 'tt0137523',
        title : 'Fight Club',
        rank : 10
    },
]

window.onload = function() {   
    // sortedMovies = sortMoviesByRank(movies)
    sortedMovies = sortMoviesByAttr(movies, 'rank')
    displayMovies(sortedMovies);
}

function displayMovies(movies) {
    let table = "<table border='1' style='width: 100%'>";
    table += "<tr><th>ID</th><th>Name</th><th>Rank</th></tr>";
    for(let index=0; index < movies.length; index++) {
        table += "<tr>";
        table += "<td>" + movies[index].id + "</td>";
        table += "<td>" + movies[index].title + "</td>";
        table += "<td>" + movies[index].rank + "</td>";
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById("movies-list").innerHTML = table
}

// function sortMoviesByRank(movies) {
//     for(let i=0; i<movies.length-1; i++) {
//         let max_object = movies[i];
//         let max_location = i;
//         for(let j=i+1; j<movies.length; j++) {
//             if(movies[j].rank > max_object.rank) {
//                 max_object = movies[j];
//                 max_location = j;
//             }
//         }
//         movies[max_location] = movies[i];
//         movies[i] = max_object;
//     }
//     return movies
// }

function sortMoviesByAttr(movies, sortAttr) {
    for(let i=0; i<movies.length-1; i++) {
        let max_object = movies[i];
        let max_location = i;
        
        let max = getMovieObject(movies, i, sortAttr);
        
        max_object = max.max_object;
        max_location = max.max_index;

        // swapping
        movies[max_location] = movies[i];
        movies[i] = max_object;
    }
    return movies
}

function getMovieObject(movies, start, sortAttr) {
    let max_obj = movies[start];
    let max_location = start;

    for(let j=start+1; j<movies.length; j++) {
        if(movies[j][sortAttr] > max_obj[sortAttr]) {
            max_obj = movies[j];
            max_location = j;
        }
    }
    return {max_object: max_obj, max_index: max_location}
}