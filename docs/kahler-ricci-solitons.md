# Kähler–Ricci 솔리톤

# 개요

**Kähler–Ricci 솔리톤(Kähler–Ricci soliton)** 은 정규화한 [Kähler–Ricci 흐름](kahler-ricci-flow.md) 아래에서 정칙 자기동형으로 옮겨질 뿐 모양이 바뀌지 않는 Kähler 계량이다. 복소 사영평면을 한 점에서 부풀린 곡면에는 Ricci 곡률이 계량의 상수배인 계량이 없다. 그러면 이 곡면에서 그 계량 대신 찾을 수 있는 가장 고른 계량이 무엇인지 묻는다.

Kähler–Ricci 솔리톤은 Ricci 형식과 Kähler 형식의 차이를 $0$ 으로 만드는 대신, 그 차이가 정칙 벡터장 하나로 적히게 한다. 부풀린 곡면에는 이런 계량이 있다.

# 직관

[Kähler–Einstein 계량](kahler-einstein-metrics.md) 문서의 Futaki 불변량을 다시 본다. Fano 다양체 $M$ 에서 $\omega\in 2\pi c_1(M)$ 이고 $\mathrm{Ric}(\omega)-\omega=i\partial\bar\partial h$ 이면, 정칙 벡터장 $X$ 마다 $\mathrm{Fut}(X)=\int\_MX(h)\thinspace\omega^n$ 이 $\omega$ 의 선택과 상관없는 수다. $\mathbb{CP}^2$ 를 한 점에서 부풀린 곡면에서는 이 수가 $0$ 이 아니므로, 어떤 $\omega$ 를 골라도 $h$ 를 상수로 만들 수 없다.

$h$ 를 상수로 만드는 대신 $h$ 의 기울기가 정칙 벡터장이 되기를 요구한다. 국소 좌표에서 $X=\sum g^{j\bar k}\partial\_{\bar k}h\thinspace\partial_j$ 가 정칙이라 하자. 그러면 $X(h)=\sum g^{j\bar k}\partial\_{\bar k}h\thinspace\partial_jh=\vert\partial h\vert^2$ 이므로 다음이 성립한다.

$$
\mathrm{Fut}(X)=\int\_M\vert\partial h\vert^2\omega^n
$$

$h$ 가 상수가 아니면 이 값은 양수다. 이런 계량은 Futaki 불변량이 $0$ 이 아니라는 방해와 어긋나지 않는다.

# 정의

## Kähler–Ricci 솔리톤

Fano 다양체 $M$ 위의 Kähler 형식 $\omega\in 2\pi c_1(M)$ 와 정칙 벡터장 $X$ 가 다음을 만족하면 $(\omega,X)$ 를 Kähler–Ricci 솔리톤이라 한다.

$$
\mathrm{Ric}(\omega)-\omega=\mathcal L\_X\omega
$$

여기서 $\mathcal L\_X$ 는 $X$ 의 실수부 방향의 [Lie 미분](lie-derivative.md)이다. $X=0$ 이면 $\mathrm{Ric}(\omega)=\omega$ 이므로 Kähler–Einstein 계량이다.

## 경사 솔리톤

$\mathrm{Ric}(\omega)-\omega=i\partial\bar\partial\theta$ 인 실함수 $\theta$ 에 대해 $X=\sum g^{j\bar k}\partial\_{\bar k}\theta\thinspace\partial_j$ 가 정칙이면 $\mathcal L\_X\omega=i\partial\bar\partial\theta$ 이고, $(\omega,X)$ 는 솔리톤이다. 이런 솔리톤을 **경사 Kähler–Ricci 솔리톤(gradient Kähler–Ricci soliton)** 이라 한다. 직관 절의 $h$ 가 $\theta$ 이고, 직관 절의 계산은 경사 솔리톤의 Futaki 불변량이 $\int\_M\vert\partial\theta\vert^2\omega^n$ 이라는 것이다.

계량 $g$ 로 쓰면 $i\partial\bar\partial\theta$ 는 [Hessian 행렬](hessian.md) $\nabla^2\theta$ 에 대응하므로 방정식은 $\mathrm{Ric}(g)+\nabla^2(-\theta)=g$ 다. 이것은 [Ricci 솔리톤](ricci-solitons.md)에서 퍼텐셜 함수가 $-\theta$ 이고 $\lambda=1$ 인 수축 경사 솔리톤이다.

# 성질

## 자기상사해

$(\omega_0,X)$ 가 솔리톤이면 정규화한 Kähler–Ricci 흐름 $\partial\omega/\partial t=-\mathrm{Ric}(\omega)+\omega$ 의 해는 $-X$ 의 실수부가 생성하는 정칙 자기동형의 족 $\varphi_t$ 로 $\omega(t)=\varphi_t^\ast\omega_0$ 다. 솔리톤에서 흐름의 우변이 $-\mathcal L\_X\omega$ 이므로, 계량은 $-X$ 의 흐름을 따라 옮겨질 뿐이다. 콤팩트 다양체 위의 Ricci 솔리톤은 경사 솔리톤이므로 Fano 다양체의 Kähler–Ricci 솔리톤도 경사 솔리톤이다.

## 유일성

정리(Tian–Zhu 정리, Tian–Zhu theorem). Fano 다양체의 Kähler–Ricci 솔리톤은 자기동형군의 단위원 성분에 속하는 정칙 자기동형으로 옮긴 것을 빼고 하나뿐이다.[^1]

Tian–Zhu 는 Futaki 불변량을 고친 정칙 불변량을 정의하고, 솔리톤의 벡터장 $X$ 가 이 불변량을 $0$ 으로 만드는 벡터장으로 정해진다는 것을 보였다.[^2] $X=0$ 이면 이 불변량은 Futaki 불변량이므로, Bando–Mabuchi 정리는 이 정리의 $X=0$ 인 경우다.

## 존재

정리(Wang–Zhu 정리, Wang–Zhu theorem). 원환 작용을 가진 Fano [원환 다양체](toric-varieties.md)에는 Kähler–Ricci 솔리톤이 있다.[^3]

$\mathbb{CP}^2$ 를 한 점에서 부풀린 곡면은 원환 다양체이므로 솔리톤이 있다. 이 곡면의 솔리톤은 Koiso 와 Cao 가 $U(2)$ 작용에 대칭인 계량으로 먼저 구성했다.[^4] Kähler–Einstein 계량이 없으므로 이 솔리톤의 $X$ 는 $0$ 이 아니다.

## 흐름의 수렴

정리(Tian–Zhu). Fano 다양체에 Kähler–Ricci 솔리톤 $(\omega\_{\mathrm{KS}},X)$ 가 있고 초기 계량 $\omega_0\in 2\pi c_1(M)$ 이 $X$ 의 허수부가 생성하는 작용에 대칭이면, 정규화한 Kähler–Ricci 흐름은 $\omega\_{\mathrm{KS}}$ 를 정칙 자기동형으로 옮긴 솔리톤으로 수렴한다.[^5]

# 활용

- Kähler–Einstein 계량의 대용. Kähler–Einstein 계량이 없는 Fano 다양체에서 표준 계량으로 쓴다. 원환 다양체에서는 Wang–Zhu 정리가 이것을 늘 준다.
- Kähler–Ricci 흐름의 극한. 정규화한 흐름이 Kähler–Einstein 계량으로 수렴하지 않는 Fano 다양체에서 극한의 후보가 솔리톤이다.
- [Ricci 흐름](ricci-flow.md) 특이점의 모형. 솔리톤은 Ricci 솔리톤의 수축 솔리톤이므로, 콤팩트이고 Einstein 이 아닌 수축 솔리톤의 예를 준다. 부풀린 곡면의 Koiso–Cao 솔리톤이 4 차원의 첫 예다.

[^1]: Gang Tian, Xiaohua Zhu, "Uniqueness of Kähler–Ricci solitons", *Acta Mathematica* **184** (2000), 271–305.
[^2]: Gang Tian, Xiaohua Zhu, "A new holomorphic invariant and uniqueness of Kähler–Ricci solitons", *Commentarii Mathematici Helvetici* **77** (2002), 297–325.
[^3]: Xu-Jia Wang, Xiaohua Zhu, "Kähler–Ricci solitons on toric manifolds with positive first Chern class", *Advances in Mathematics* **188** (2004), 87–103.
[^4]: Huai-Dong Cao, "Existence of gradient Kähler–Ricci solitons", in *Elliptic and Parabolic Methods in Geometry*, A K Peters, 1996, 1–16. Norihito Koiso 가 같은 시기에 독립적으로 구성했다.
[^5]: Gang Tian, Xiaohua Zhu, "Convergence of Kähler–Ricci flow", *Journal of the American Mathematical Society* **20** (2007), 675–699.

# 연관 문서

## 선수지식

- [Ricci 솔리톤](ricci-solitons.md)
- [Kähler–Ricci 흐름](kahler-ricci-flow.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #complex_analysis #analysis
