SELECT distinct A.name as usuario, 
IF( max(rep_date) >= '2021-01-01', 'Usuário ativo', 'Usuário inativo') as condicao_usuario
FROM SpotifyClone.users A 
left JOIN SpotifyClone.history B ON A.users_id = B.user_id
GROUP BY A.users_id
ORDER BY A.name ASC;