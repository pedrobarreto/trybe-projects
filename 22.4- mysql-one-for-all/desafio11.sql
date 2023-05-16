SELECT A.name as nome_musica,
REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(A.name, 
'Streets', 'Code Review') ,
 'Her Own', 'Trybe') ,
 'Inner Fire', 'Project') ,
 'Silly', 'Nice') , 
 'Circus', 'Pull Request')
as novo_nome
FROM SpotifyClone.tracks A 
WHERE A.name REGEXP 'Streets|Her Own|Inner|Silly|Circus'
GROUP BY A.id
ORDER BY nome_musica  ASC;