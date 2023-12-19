import Course from '../models/courseModel.js'

export const createCourse= async(req,res)=>{
    const newCourse= new Course(req.body)
    try {
        const saveCourse= await newCourse.save()
        // res.status(200).json(savedHotel)
        res.status(201).send({
            success: true,
            message: "The course has been added successfully",
            data:saveCourse
          });
    } catch (error) {
        res.status(500).json(error)
        
    }
}