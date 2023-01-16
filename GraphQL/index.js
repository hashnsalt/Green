const database = require('./database')
const { ApolloServer, gql } = require('apollo-server')
const { equipments } = require('./database')
const { supplies } = require('./database')

//type Query 안에 teams와 equipment로 쿼리를 정의하겠다.

//team(id: int): Team id 별로 데이터를 뽑아내겠다.
const typeDefs = gql`
    type Query {
        teams: [Team]
        team(id: Int): Team
        equipments: [Equipment]
        supplies: [Supply]
    }

    type Mutation {
      insertEquipment(
        id: String,
        used_by: String,
        count: Int,
        new_or_used: String
      ):Equipment
      
      deleteEquipment(id: String): Equipment

      editEquipment(
        id: String,
        used_by: String,
        count: Int,
        new_or_used: String
      ):Equipment
    }

    type Team {
        id: Int
        manager: String
        office: String
        extension_number: String
        mascot: String
        cleaning_duty: String
        project: String
    }
    type Equipment {
      id: String
      used_by: String
      count: Int
      new_or_used: String
    }
    type Supply {
      id: String
      team: Int
    }
`
//Equipment로 정의 된 { 쿼리에 자료형을 정의해줌 }


const resolvers = { //gql쿼리에서는 각각의 필드마다 함수가 하나씩 존재한다고 생각하면 된다. //리졸버의 역할은 각 필드에 해당하는 데이터를 실제로 내주는 것이다. 
  Query: {
    teams: () => database.teams,
    equipments: () => database.equipments,
    supplies: () => database.supplies,
    team: (parent, args, context, info) => database.teams //기존에 가지고 있는 필드의 항목들(매개변수들)을 선택을 해서 추출을 할것이기 때문에 args를 선택해서 database.teams에서 걸러내겠다(filter). //args 쿼리에서 입력으로 넣을 인자.
    .filter((team) => { //조건에 만족하는 데이터를 뽑아내기 위해 사용
      return team.id === args.id //내가 1번이라고 넣는 아이디, 2번이라고 넣는 아이디 database.teams의 값 == args.id와 같다면 출력. 이때 team.id 와 args.id의 값이 같다면 값을 출력하겠다는 말.
    })[0]
  },
  Mutation: {//이미 만들어져 있는 쿼리에 편집작업을 하겟다라는 뜻으로 Mutation에 실행문을 넣어줌. 기존의 데이터를 push
    insertEquipment: (parent, args, context, info) => {
      database.equipments.push(args) //제일 마지막에 데이터를 push하고 
      return args //쿼리 결과로 돌림
    },
    deleteEquipment: (parent, args, context, info) => {
      const deleted = database.equipments
        .filter((equipment) => {
          return equipment.id === args.id //내가 입력한 객체 데이터와 같은것을 delete에 넣어줌. 이것은 삭제될 데이터
        })[0]
        database.equipments = database.equipments
        .filter((equipment) => {
            return equipment.id != args.id //삭제한 데이터를 제외하고 남은 데이터를 최종 데이터로 넣어줌.
          })
        return deleted
    },
    editEquipment: (parent, args, context, info) => {
      return database.equipments
        .filter((equipment) => {
          return equipment.id === args.id
        }).map((equipment) => {
          Object.assign(equipment, args)
          return equipment
        })[0]
    }
  }
  //teams를 database.teams로 내보내기 하겠다. 배열 객체로 만든것을 객체로 만들고
}

const server = new ApolloServer({ typeDefs, resolvers })
   //내가 입력받은 typeDefs를 리졸버로 내보내기 한것을 아폴로 서버로 연결하겠다.
   //typeDefs 쿼리를 정의한 것을 json파일로 바꾸어 내보내기 하겠다. -> 그것을 아폴로 서버로 연동하여 사용하겟다.
server.listen().then(({ url }) => { //서버와 잘 연결이 됬으면 아폴로서버의 url를 표시해라. localhost의 아폴로 서버로 접속할 수 있는 화면이 뜸.
console.log(`Server ready at ${url}`)
})