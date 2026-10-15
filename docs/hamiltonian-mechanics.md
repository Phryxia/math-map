# Hamilton 역학

# 개요

Hamilton 역학은 운동을 [여접다발](cotangent-bundle.md) 위의 1차 미분방정식계로 적는다. [변분법](calculus-of-variations.md)의 Euler–Lagrange 방정식은 위치에 대한 2차 방정식이고, 속도를 운동량으로 바꾸면 같은 운동이 위치와 운동량에 대한 1차 방정식 두 개가 된다.

이 바꾸기가 [볼록 공액](convex-conjugate.md)이고, 바꾼 뒤의 방정식은 심플렉틱 형식 하나로 좌표 없이 적힌다.

# 직관

질량 $m$ 인 입자가 퍼텐셜 $V$ 안에서 움직이는 계의 Lagrange 함수는 $L(q,\dot q)=\frac12m\dot q^2-V(q)$ 이고, 작용의 정류 조건은

$$
m\ddot q=-V'(q)
$$

이다. $q$ 에 대한 2차 방정식이라 해를 적으려면 초기 위치와 초기 속도를 함께 넣어야 한다. 운동량 $p=m\dot q$ 를 독립 변수로 올리면 이 방정식이 $\dot q=p/m$ 과 $\dot p=-V'(q)$ 둘로 갈라지고, 두 식 모두 1차다. 오른쪽에 나오는 두 함수는 $H(q,p)=p^2/2m+V(q)$ 의 편미분이다.

일반 $L$ 에서 같은 바꾸기를 하려면 $p=\partial L/\partial\dot q$ 를 $\dot q$ 에 대해 풀어야 한다. $L$ 이 $\dot q$ 에서 볼록이면 이 식이 한 값으로 풀리고, 그렇게 얻은 $H$ 는 $L$ 의 볼록 공액이다.

# 정의

**Hamilton 함수**는 Lagrange 함수의 속도 변수에 대한 볼록 공액

$$
H(q,p)=\sup\_{v}\thinspace\lbrack p\cdot v-L(q,v)\rbrack
$$

이다. $L$ 이 $v$ 에서 강볼록이면 상한은 $p=\partial L/\partial v$ 를 만족하는 $v$ 하나에서 달성된다.

**정준방정식**은

$$
\dot q^i=\frac{\partial H}{\partial p\_i},\qquad \dot p\_i=-\frac{\partial H}{\partial q^i}
$$

이다.

좌표를 쓰지 않는 형태는 다음과 같다. 심플렉틱 다양체 $(M,\omega)$ 와 매끄러운 함수 $H\colon M\to\mathbb R$ 에 대해 **Hamilton 벡터장** $X\_H$ 는

$$
\omega(X\_H,\cdot)=dH
$$

로 정해지는 유일한 벡터장이다. $M=T^\ast N$ 의 표준 좌표 $(q,p)$ 에서 $\omega=\sum\_i dq^i\wedge dp\_i$ 이고 $X\_H$ 의 적분곡선이 정준방정식의 해다.

# 성질

## 에너지 보존

**정리.** $H$ 는 $X\_H$ 의 흐름을 따라 상수다.

$dH(X\_H)=\omega(X\_H,X\_H)=0$ 이고 $\omega$ 가 반대칭이므로 성립한다. 좌표로 쓰면 $\dot H=\partial\_qH\thinspace\partial\_pH-\partial\_pH\thinspace\partial\_qH=0$ 이다. ∎

## 흐름의 심플렉틱 성질

**정리.** $X\_H$ 의 흐름 $\varphi\_t$ 는 $\omega$ 를 보존한다.

Cartan 공식으로 $\mathcal L\_{X\_H}\omega=d(\iota\_{X\_H}\omega)+\iota\_{X\_H}d\omega$ 이고, 오른쪽 첫 항은 $d(dH)=0$, 둘째 항은 $\omega$ 가 닫혀 있어 $0$ 이다. ∎

따라서 $\omega^n/n!$ 도 보존되고, 위상공간의 부피가 흐름에 불변이다. 이 부피가 Liouville 측도다.

## Poisson 괄호

함수 $f,g$ 에 대해 $\lbrace f,g\rbrace=\omega(X\_f,X\_g)$ 로 두면 $\dot f=\lbrace f,H\rbrace$ 이고, $\lbrace f,H\rbrace=0$ 인 $f$ 가 보존량이다. 대칭에서 이런 $f$ 를 얻는 것이 [Noether 정리](noether-theorem.md)다. 괄호는 반대칭이고 Jacobi 항등식을 만족하므로 매끄러운 함수들이 Lie 대수를 이룬다.

## Lagrange 쪽과의 대응

$L$ 이 $v$ 에서 강볼록이면 $H$ 도 $p$ 에서 볼록이고 $H$ 의 공액이 다시 $L$ 이므로, Lagrange 쪽 해와 Hamilton 쪽 해가 서로 옮겨진다. $L$ 이 볼록이 아니면 공액이 정보를 잃고 대응이 끊긴다.

# 활용

- [여접다발](cotangent-bundle.md)의 성질 절이 드는 측지선 흐름이 $H(q,p)=\frac12g^{ij}p\_ip\_j$ 의 정준방정식이다. 그 해의 밑공간 투영이 [측지선](geodesics.md)이다.
- [심플렉틱 다양체](symplectic-manifolds.md)의 Darboux 정리가 국소 좌표를 $(q,p)$ 로 고정해 주므로, 모든 심플렉틱 다양체 위의 흐름을 정준방정식으로 적을 수 있다.
- 흐름이 $\omega$ 를 보존한다는 성질을 그대로 지키는 수치 적분법을 쓴다. 보존하지 않는 방법은 긴 시간 적분에서 에너지가 밀린다.
- [볼록 공액](convex-conjugate.md)의 정의가 쓰이는 자리다. 공액쌍 $(L,H)$ 가 역학의 두 서술을 잇는다.[^1]

[^1]: V. I. Arnold, *Mathematical Methods of Classical Mechanics*, 2nd ed., Springer Graduate Texts in Mathematics 60 (1989), 3 장과 8 장. Legendre 변환, 정준방정식, 심플렉틱 구조를 다룬다.

# 연관 문서

## 선수지식

- [변분법](calculus-of-variations.md)
- [여접다발](cotangent-bundle.md)

## 더 알아보기

- [Noether 정리](noether-theorem.md)

#differential_geometry #analysis #optimization
