import mongoose from 'mongoose'
const JobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true},
    company:{
        type:String,
        required:true
    },
    location:{
       type: String,
       enum: ["Remote","Onsite"],
       required: true,
    }, 
    type:{
        type:String,
        enum:['FullTime','PartTime','Contract','Internship'],
        required:true
    },
    salaryFrom:{
        type:Number,
        required:true
    },
    salaryTo:{
        type:Number,
        required:true
    },
    description:{
        type:String
    },
    createdAt:{
      type:Date,
      default:Date.now
    }
})
delete mongoose.connection.models['Job'];
const Job = mongoose.models.Job || mongoose.model('Job', JobSchema);
export default Job
