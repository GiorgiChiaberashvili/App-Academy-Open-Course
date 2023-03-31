Get a specific artist's details based on artistId

Request components:

Method:GET
URL:artists/:artistId
Headers:('Content-Type', 'application/json')
Body:none

Response components:

Status code:200
Headers:('Content-Type', 'application/json')
Body: details of the artist {artistId: name; albums:{albumId: name: artistId}}

Add an artist

Request components:

Method:POST
URL:/artists
Headers:('Content-Type', 'application/json')
Body:none

Response components:

Status code: 201 (created)
Headers:('Content-Type', 'application/json')
Body:artist details

Edit a specified artist by artistId

Request components:

Method:POST
URL:/artists/:artistId
Headers:('Content-Type', 'application/json')
Body:none

Response components:

Status code: 200
Headers:('Content-Type', 'application/json')
Body:  {artistId:#, editedValueKey: editedValue updateAt:time}

Delete a specified artist by artistId

Request components:

Method:DELETE
URL:/artists/:artistId
Headers:('Content-Type', 'application/json')
Body:none

Response components:

Status code: 200
Headers:('Content-Type', 'application/json')
Body: message:"Successfully Deleted"

Get all albums of a specific artist based on artistId
Request components:

Method:GET
URL:/artists/:artistId/album
Headers:('Content-Type', 'application/json')
Body:none

Response components:

Status code: 200
Headers:('Content-Type', 'application/json')
Body:{albumId:name:artistId}

Get a specific album's details based on albumId

Request components:

Method:GET
URL:/albums/:albumsId
Headers:('Content-Type', 'application/json')
Body:none

Response components:

Status code: 200
Headers:('Content-Type', 'application/json')
Body:{album:albumId}


Add an album to a specific artist based on artistId

Request components:

Method:POST
URL:/albums/:artistId/album
Headers:('Content-Type', 'application/json')
Body:none

Response components:

Status code:201
Headers:('Content-Type', 'application/json')
Body:

Edit a specified album by albumId

Request components:

Method:PUT
URL:/albums/:albumId
Headers:('Content-Type', 'application/json')
Body:none

Response components:

Status code: 200
Headers:('Content-Type', 'application/json')
Body:{ albumId: editedValueKey: editedValue artistId: updatedAt: }

Delete a specified album by albumId

Request components:

Method:DELETE
URL:/albums/:albumId
Headers:('Content-Type', 'application/json')
Body:none

Response components:

Status code: 200
Headers:('Content-Type', 'application/json')
Body:{successfully:deleted}

Get all songs of a specific artist based on artistId

Request components:

Method:GET
URL:/artists/:artisId
Headers:('Content-Type', 'application/json')
Body:none

Response components:

Status code: 200
Headers:('Content-Type', 'application/json')
Body:{}

Get all songs of a specific album based on albumId

Request components:

Method:GET
URL:/albums/:albumId/songs
Headers:('Content-Type', 'application/json')
Body:none

Response components:

Status code: 200
Headers:('Content-Type', 'application/json')
Body:{albums:albumId:songs}

Get all songs of a specified trackNumber

Note: This one is meant to be a little more challenging, but should still follow a similar pattern to those above.

Can you see a pattern between this endpoint and the two previous endpoints?

Hint: Think of how you solved getting all songs by a specific artist and by a specific album. What is resource that you wanted to get back for those endpoints? What information was that resource constrained by for each of those endpoints? Now think about getting all songs by a specific trackNumber. What is the resource you want to get? What information is the resource constrained by for this endpoint?

Request components:

Method:GET
URL: /albums/:albumId/trackNumber/songs
Headers:('Content-Type', 'application/json')
Body:none

Response components:

Status code: 200
Headers:('Content-Type', 'application/json')
Body:{albums:albumId:trackNumber:songs}

Get a specific song's details based on songId
Request components:

Method:GET
URL:/albums/:albumsId/:singId
Headers:('Content-Type', 'application/json')
Body:none

Response components:

Status code:200
Headers:('Content-Type', 'application/json')
Body:{albums:albumsId:singId}

Add a song to a specific album based on albumId

Request components:

Method:PUT
URL:/albums/:albumId/songs
Headers:('Content-Type', 'application/json')
Body:none

Response components:

Status code:200
Headers:('Content-Type', 'application/json')
Body:{albums:albumId:songs}

Edit a specified song by songId
Request components:

Method: PUT
URL: /songs/:songId
Headers:('Content-Type', 'application/json')
Body:none

Response components:

Status code: 200
Headers:('Content-Type', 'application/json')
Body:edited song input

Delete a specified song by songId
Request components:

Method:DELETE
URL:/songs/:songId
Headers:('Content-Type', 'application/json')
Body:none

Response components:

Status code: 200
Headers:('Content-Type', 'application/json')
Body:{message:Successfully delete}
