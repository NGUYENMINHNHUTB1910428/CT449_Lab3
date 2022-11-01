<template>
    <div class="page mt-3">
        <h4>Thêm liên hệ</h4>
        <ContactForm :contact="contact" @submit:contact="addContact" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import ContactForm from '@/components/ContactForm.vue'
import ContactService from '@/services/contact.service'
export default {
    components: {
        ContactForm
    },
    data() {
        return {
            contact: {
                name: '',
                email: '',
                address: '',
                phone: '',
                favorite: false
            },
            message: ''
        }
    },
    methods: {
        async addContact(data) {
            try {
                await ContactService.create(data)
                this.message = 'Tạo liên hệ thành công.'
            } catch (error) {
                this.message = 'Tạo liên hệ không thành công.'
            }
        }
    },
    created() {
        this.contact = {
            name: '',
            email: '',
            address: '',
            phone: '',
            favorite: false
        }
        this.message = ''
    }
}
</script>