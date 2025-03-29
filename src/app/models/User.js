import { model, Schema, models } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { 
        type: String, 
        required: true,
        validate: pass => {
            if (!pass?.length || pass.length < 5) {
                new Error('Password must be at least 5 characters long');
            }
        }
    }
}, { timestamps: true });

// Hash password before saving
UserSchema.pre('save', function(next) {
    if (!this.isModified('password')) return next();

    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
    next();
});

//this is the old method of hashing
/*UserSchema.post('validate',function(user){
    const notHashedPassword = user.password;
    const salt =bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(notHashedPassword, salt);
})*/  


export const User = models.User || model('User', UserSchema);