import {Query, Resolver} from "type-graphql";

@Resolver()
export class HelloResolver{
    @Query(() => String )
    hello(){
        return "Hellow"
    }

    @Query(() => String )
    yo(){
        return "Hellow"
    }
}