# 심플렉틱 다양체

# 개요

심플렉틱 다양체는 닫히고 비퇴화인 2형식을 가진 다양체다. 그 2형식은 매끄러운 함수 하나를 벡터장 하나로 바꾸고, 그 벡터장의 흐름이 Hamilton 역학의 운동이다. 비퇴화성은 차원을 짝수로 묶고, 닫힘은 흐름이 2형식을 보존하게 한다.

국소적으로는 모두 같다. Darboux 정리가 모든 점의 근방에서 2형식을 표준형으로 바꾸므로 Riemann 기하의 곡률에 해당하는 국소 불변량이 없다. 구별은 전역에서 생기고, 코호몰로지류 $\lbrack\omega\rbrack$ 가 그 첫 장애다.

# 직관

평면 위 입자의 운동을 에너지 $H(q,p)=(q^2+p^2)/2$ 하나로 적는다. 함수 하나에서 운동 방향을 어떻게 얻는가. 함수가 각 방향으로 얼마나 변하는지 알려주는 것은 미분 $dH$ 이고, 이것은 점마다 접벡터를 수에 보내는 1형식이다. 운동은 점마다 접벡터를 주는 벡터장이어야 하므로 1형식을 벡터장으로 바꿀 방법이 있어야 한다.

평면의 표준 내적으로 바꿔 본다. 1형식 $dH$ 에 대응하는 벡터장은 기울기 $\nabla H=(q,p)$ 이고, 그 흐름은 원점에서 바깥으로 곧게 나간다. 흐름을 따라가면 $H$ 가 커진다. 그런데 이 에너지를 가진 진자는 에너지를 유지한 채 원점 주위를 돈다. 기울기로는 그 운동이 나오지 않는다.

내적이 대칭이어서 막혔다. 기울기가 $0$ 이 아닌 점에서 $dH(\nabla H)=\langle\nabla H,\nabla H\rangle\gt 0$ 이므로 $H$ 는 기울기 흐름을 따라 반드시 증가한다. 대칭 대신 반대칭인 쌍선형형식 $\omega$ 를 써서 $\omega(X_H,\cdot)=dH$ 로 벡터장을 정하면 $dH(X_H)=\omega(X_H,X_H)=0$ 이고 $H$ 가 흐름을 따라 일정하다. 평면에서 $\omega=dq\wedge dp$ 로 잡으면 $X_H=(p,-q)$ 이고 궤도는 원점 중심의 원이다.

좌표로 적으면 $\dot q=\partial H/\partial p$ 와 $\dot p=-\partial H/\partial q$ 로 Hamilton 방정식이 된다. 두 식의 부호가 어긋난 것은 $\omega$ 의 반대칭성에서 나온다. 점마다 반대칭이고 비퇴화인 2형식을 주고 그 형식이 닫혀 있기를 요구한 것이 심플렉틱 다양체다.

# 정의

매끄러운 다양체 $M$ 위의 2형식 $\omega$ 가 심플렉틱 형식이라는 것은 다음 두 조건을 만족한다는 뜻이다.

- 닫힘: $d\omega=0$.
- 비퇴화: 각 점 $p$ 와 각 $v\in T_pM$ 에 대해, 모든 $w\in T_pM$ 에서 $\omega_p(v,w)=0$ 이면 $v=0$.

쌍 $(M,\omega)$ 를 **심플렉틱 다양체**라 한다.

## 짝수 차원과 부피형식

비퇴화인 반대칭 쌍선형형식은 짝수 차원 벡터공간에만 있다. 따라서 $\dim M=2n$ 이고, 비퇴화성은 $2n$ 형식 $\omega^n$ 이 어느 점에서도 $0$ 이 아니라는 것과 같다. 그러므로 심플렉틱 다양체는 방향을 갖고 $\omega^n/n!$ 이 부피형식이다.

## 표준형

$\mathbb R^{2n}$ 의 좌표를 $q^1,\dots,q^n,p_1,\dots,p_n$ 이라 할 때

$$\omega_0=\sum_{i=1}^{n} dq^i\wedge dp_i$$

는 심플렉틱 형식이다.

## Hamilton 벡터장

$H\in C^\infty(M)$ 에 대해

$$\omega(X_H,\cdot)=dH$$

를 만족하는 벡터장 $X_H$ 가 유일하게 있다. 비퇴화성이 $v\mapsto\omega(v,\cdot)$ 를 접공간과 여접공간 사이의 동형으로 만들기 때문이다. $X_H$ 를 $H$ 의 **Hamilton 벡터장**이라 하고 $H$ 를 Hamilton 함수라 한다. 표준형에서는 $X_H=\sum_i(\partial H/\partial p_i)\partial\_{q^i}-(\partial H/\partial q^i)\partial\_{p_i}$ 이고, 적분곡선은

$$\dot q^i=\frac{\partial H}{\partial p_i},\qquad \dot p_i=-\frac{\partial H}{\partial q^i}$$

를 만족한다.

## Poisson 괄호

$f,g\in C^\infty(M)$ 에 대해 $\lbrace f,g\rbrace=\omega(X_f,X_g)$ 로 정의한다. 표준형에서는

$$\lbrace f,g\rbrace=\sum_{i=1}^{n}\left(\frac{\partial f}{\partial q^i}\frac{\partial g}{\partial p_i}-\frac{\partial f}{\partial p_i}\frac{\partial g}{\partial q^i}\right)$$

이다. Hamilton 흐름을 따른 $f$ 의 변화율은 $\dot f=\lbrace f,H\rbrace$ 다.

## Lagrangian 부분다양체

$\dim M=2n$ 일 때, $n$ 차원 부분다양체 $L\subset M$ 이 포함사상으로 끌어온 2형식이 $0$ 이면 $L$ 을 **Lagrangian 부분다양체**라 한다. 비퇴화성 때문에 $\omega$ 가 소멸하는 부분다양체의 차원은 $n$ 을 넘지 못하므로 Lagrangian 은 그 최대 차원이다.

# 성질

## Darboux 정리

심플렉틱 다양체의 각 점에는 좌표근방 $(U;q^i,p_i)$ 가 있어 그 위에서 $\omega=\sum_i dq^i\wedge dp_i$ 다.[^1]

증명의 요지는 Moser 의 논법이다. 한 점에서 선형대수로 $\omega$ 를 표준형에 맞춘 뒤, 두 형식을 잇는 경로 $\omega_t=(1-t)\omega_0+t\omega$ 를 잡는다. 각 $\omega_t$ 가 그 점 근방에서 비퇴화이고 $\omega-\omega_0$ 가 닫혀 있으므로 Poincaré 보조정리가 $\omega-\omega_0=d\sigma$ 를 준다. $\omega_t(X_t,\cdot)=-\sigma$ 로 정한 벡터장의 흐름이 $\omega_t$ 를 $\omega_0$ 으로 끌어온다.

Riemann 계량은 곡률이라는 국소 불변량을 갖지만 심플렉틱 형식은 갖지 않는다. 같은 차원의 두 심플렉틱 다양체는 국소적으로 구별되지 않는다.

## 흐름의 불변량

Hamilton 흐름은 $\omega$ 를 보존한다. 벡터장 $X$ 와 2형식에 대한 Cartan 공식은 $L_X\omega=d\bigl(\omega(X,\cdot)\bigr)+d\omega(X,\cdot,\cdot)$ 다. $X=X_H$ 를 넣으면 첫 항이 $d\thinspace dH=0$ 이고 둘째 항은 $d\omega=0$ 이어서 사라지므로

$$L_{X_H}\omega=0$$

이다. 따라서 부피형식 $\omega^n/n!$ 도 보존되고, 이것이 Liouville 정리다.[^2] 에너지도 보존된다. $\dot H=\lbrace H,H\rbrace=\omega(X_H,X_H)=0$ 이다.

## Poisson 괄호와 Jacobi 항등식

$d\omega=0$ 이면 $\lbrace f,\lbrace g,h\rbrace\rbrace+\lbrace g,\lbrace h,f\rbrace\rbrace+\lbrace h,\lbrace f,g\rbrace\rbrace=0$ 이다. 좌변을 $\omega$ 와 세 Hamilton 벡터장으로 적으면 $d\omega(X_f,X_g,X_h)$ 의 상수배가 되기 때문이다. 그러므로 닫힘 조건은 $C^\infty(M)$ 이 Poisson 괄호로 Lie 대수가 된다는 것과 같다.

## 코호몰로지 장애

콤팩트 심플렉틱 다양체 $M^{2n}$ 에서 $\lbrack\omega\rbrack^n\ne 0$ 이다. $\omega^n$ 이 부피형식이므로 $\int_M\omega^n\ne 0$ 이고, Stokes 정리가 완전형식의 적분을 $0$ 으로 만들기 때문이다. 따라서 $n\ge 1$ 이면 [de Rham 코호몰로지](de-rham-cohomology.md) $H^2(M;\mathbb R)$ 가 $0$ 이 아니다.

$S^4$ 는 $H^2(S^4;\mathbb R)=0$ 이므로 심플렉틱 형식을 갖지 않는다. 짝수 차원이고 방향을 갖는 콤팩트 다양체라도 심플렉틱 구조를 갖지 못한다.

## 비압축 정리

$\mathbb R^{2n}$ 의 표준 형식에서, 반지름 $r$ 인 공을 반지름 $R$ 인 원기둥 $\lbrace x_1^2+y_1^2\lt R^2\rbrace$ 안으로 보내는 심플렉틱 매장이 있으면 $r\le R$ 이다.[^1] 부피만 보면 $r$ 에 제한이 없으므로, 심플렉틱 사상은 부피 보존 사상보다 좁은 집합이다.

[^1]: Dusa McDuff, Dietmar Salamon, *Introduction to Symplectic Topology*, 3판, Oxford University Press, 2017. Darboux 정리와 Moser 논법은 3 장, 코호몰로지 장애는 4 장, 비압축 정리는 9 장이다.
[^2]: V. I. Arnold, *Mathematical Methods of Classical Mechanics*, 2판, Springer, 1989, 8 장과 9 장. Hamilton 방정식, Liouville 정리, 작용-각 좌표가 여기 있다.

# 활용

- **여접다발.** 다양체 $N$ 의 여접다발 $T^\ast N$ 에는 표준 1형식 $\lambda$ 가 있고 $\omega=-d\lambda$ 가 심플렉틱 형식이다. 좌표로 적으면 표준형이고, 고전역학의 위상공간이 이 꼴이다. 영단면과 각 섬유가 Lagrangian 부분다양체다.
- **Kähler 다양체.** [Kähler 다양체](kahler-manifolds.md)의 Kähler 형식은 닫히고 비퇴화이므로 심플렉틱 형식이다. 복소구조와 계량을 잊으면 심플렉틱 다양체가 남는다.
- **적분가능계.** $2n$ 차원 다양체에서 Poisson 괄호가 서로 소멸하는 $n$ 개의 보존량이 있으면, Arnold–Liouville 정리가 공통 준위집합의 콤팩트 성분을 원환면으로 보고 그 위에서 흐름을 일차함수로 적는다.[^2] 준위집합이 Lagrangian 부분다양체다.
- **모멘트 사상.** Lie 군이 $\omega$ 를 보존하며 작용할 때, 작용의 보존량을 Lie 대수의 쌍대공간 값 함수로 모은 것이 모멘트 사상이다. 각운동량이 회전군에 대응하는 예다.

# 연관 문서

## 선수지식

- [미분형식](differential-forms.md)

## 더 알아보기

- [여접다발](cotangent-bundle.md)
- [Kähler 다양체](kahler-manifolds.md)

#differential_geometry #topology #analysis
