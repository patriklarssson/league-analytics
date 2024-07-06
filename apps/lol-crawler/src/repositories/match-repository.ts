import { MatchDto } from "../models/db";
import { getDb } from "../utils/db";

const matchesColletion = async () => {
    const db = getDb()
    return db.collection<MatchDto>("matches")    
}

export const checkOrInsertAnalyzedMatch = async (matchId: string) => {
    try {
        const matchesCollection = await matchesColletion()        
        const matchAlreadyAnalyzed = await matchesCollection.findOne({ _id: matchId });

        if (matchAlreadyAnalyzed) return true;
  
        await matchesCollection.insertOne({ _id: matchId });
        
        return false;
      } catch (error) {
        console.error('Error inserting match data: ', error);
        return true;
      }
}