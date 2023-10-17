export interface Patient {
   id: number;
   patientName: string;
   patientNationalID: string;
   frequentSickness: Disease;
   diseaseId: number;
   createdAt: string;
   updatedAt: string;
}

export interface Disease {
   id: number;
   name: string;
   createdAt: string;
   updatedAt: string;
}
