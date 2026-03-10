
export function openLayer(layerClass) {
    const layer = document.getElementById(layerClass)
    const dim = document.querySelector('.dim')
    if (layer) {
        layer.classList.add('-active')
    }
    if (dim) {
        dim.classList.add('-active')
    }
}

export function closeLayer(layerClass) {
    const layer = document.getElementById(layerClass)
    const dim = document.querySelector('.dim')
    if (layer) {
        layer.classList.remove('-active')
    }
    if (dim) {
        dim.classList.remove('-active')
    }
}

export function fmdcTempMethods() {
    return {
        onInterestCalculated(payload) {
            this.latestInterestCalc = payload
            console.log('금리 계산 결과', payload)
        },
        onShare() {
        console.log('공유 버튼이 클릭되었습니다.');
        },
        onWishlist() {
            console.log('장바구니 버튼이 클릭되었습니다.');
        },
        onSelectRecommendedProduct(item) {
            // Placeholder: route to 상품 상세 or open related action.
            console.log('추천상품 선택', item)
        },
        onConsult() {
            // Placeholder: connect 상담 flow/modal/router when available.
            console.log('상담 버튼 클릭')
        },
        goBack() {
            window.history.back();
            // if (this.currentStep > 1) {
            //     this.prevStep()
            //     return
            // }
            // if (this.$router) this.$router.back()
            console.log('뒤로가기 버튼이 클릭되었습니다.');
        },
        onCancel() {
            this.currentStep = 1
            console.log('취소 버튼이 클릭되었습니다. 단계 초기화');
        },
        openPopup() {
            this.isPopupOpen = true
            console.log('팝업이 열렸습니다.');
        },
        closePopup() {
            this.isPopupOpen = false
            console.log('팝업이 닫혔습니다.');
        },
        openLayer(layer, target) {
            this.activeLayer = layer
            if (this.$emit) {
                this.$emit('openLayer', layer, target)
            }
            this.isPopupOpen = true
            console.log('팝업이 열렸습니다.');
        },

        setTab(tabId) {
            this.activeTab = tabId
        },

        onSelectAgreeDoc(item) {
            // Placeholder: open selected 약관/설명서 document.
            console.log('약관 문서 선택', item)
        },
        setDocMethod(method) {
             this.docMethod = method === 'sms' ? 'sms' : 'email'
        },
        goToStep(step) {
            this.currentStep = step
            console.log(`단계 ${step}로 이동`);
        },
        nextStep() {
            if (typeof this.currentStep === 'number') {
                const max = typeof this.maxStep === 'number' ? this.maxStep : this.currentStep + 1
                this.currentStep = Math.min(this.currentStep + 1, max)
            }
            if (this.$emit) {
                this.$emit('nextStep')
            }
            console.log('다음 단계로 이동');
        }
    }
}

