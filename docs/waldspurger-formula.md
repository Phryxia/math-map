# Waldspurger 정리와 토릭 주기

# 개요

**Waldspurger 정리(Waldspurger's theorem)** 는 $\mathrm{PGL}\_2$ 의 첨점형식을 토러스 위에서 적분한 값의 제곱이 $L$ 함수의 중심값과 상수배로 같다는 공식이다. 판별식 $D$ 마다 뒤틀린 $L$ 함수 $L(1/2,f\otimes\chi_D)$ 가 $0$ 인지 알고 싶다고 하자. 반정수 무게 [모듈러 형식](modular-forms.md) $g=\sum c(n)q^n$ 의 계수 $c(\vert D\vert)$ 의 제곱이 이 값과 상수배로 같으므로, $q$ 전개에서 계수 하나를 읽으면 판정된다. 정리는 이 계수를 토릭 주기라는 적분으로 바꾸어 일반 수체의 첨점형식에서 같은 등식을 준다.

# 직관

무게 $2k$ 의 새형식 $f$ 에 [Shimura 대응](shimura-correspondence.md)으로 무게 $k+1/2$ 의 형식 $g=\sum c(n)q^n$ 을 붙인다. 기본판별식 $D$ 마다 $q$ 전개에서 읽어 낼 수 있는 계수 $c(|D|)$ 의 제곱이 뒤틀린 $L$ 함수의 중심값과 상수배로 같아서, $D$ 를 바꿔 가며 계수를 읽으면 중심값이 $0$ 인 $D$ 가 계수의 소멸로 판정된다.

$$
|c(|D|)|^2\ \sim\ |D|^{k-1/2}\thinspace\frac{L\negthinspace\left(\tfrac12,\ f\otimes\chi_D\right)}{\langle f,f\rangle}
$$

이 등식은 Kohnen–Zagier 공식(Kohnen–Zagier formula)의 꼴이다. 이 계수를 표현론으로 옮긴 것이 토릭 주기다. 허수이차체 $K$ 를 포함하는 [사원수 대수](quaternion-algebras.md) $B$ 에서 $K^\times$ 는 $B^\times$ 의 극대 토러스이고, $\pi$ 의 벡터를 그 토러스 위에서 $\chi$ 에 대해 적분한 값이 주기다. 같은 $\pi$ 를 놓고도 $B$ 를 바꾸면 주기가 $0$ 이 되기도 하고 되지 않기도 하며, 어느 $B$ 에서 $0$ 이 아닌지는 $\varepsilon$ 인자가 지정한다. $\mathrm{SO}(3)$ 는 $\mathrm{PGL}\_2$ 이고 $\mathrm{SO}(2)$ 는 토러스이며 $\mathrm{SO}(3)$ 의 순수 내부형식이 사원수 대수들의 곱셈군이므로, 이것이 [Gan–Gross–Prasad 추측](gan-gross-prasad.md)(GGP)의 쌍 $(\mathrm{SO}(3),\mathrm{SO}(2))$ 경우다.

# 정의

## 사원수 대수와 토릭 주기

$F$ 를 수체, $K/F$ 를 이차 확대, $B/F$ 를 사원수 대수라 하고 매장 $K\hookrightarrow B$ 를 고정한다. $\pi$ 를 $B^\times(\mathbb A)$ 의 자기동형 표현이라 하고 [Jacquet–Langlands 대응](jacquet-langlands.md)으로 $\mathrm{PGL}\_2$ 위의 표현 $\pi'$ 와 짝지운다. $\chi$ 는 $K^\times\backslash\mathbb A_K^\times$ 의 지표이고 $\chi|\_{\mathbb A_F^\times}=1$ 이다. **토릭 주기(toric period)** 는

$$
\mathcal P_\chi(\varphi)=\int_{\mathbb A_F^\times K^\times\backslash\thinspace\mathbb A_K^\times}\varphi(t)\thinspace\chi^{-1}(t)\thinspace dt
$$

이고, 적분 구간 $\mathbb A_F^\times K^\times\backslash\mathbb A_K^\times$ 가 콤팩트이므로 수렴한다. $F=\mathbb Q$, $K=\mathbb Q(i)$, $B=M_2(\mathbb Q)$ 이면 $a+bi\mapsto\begin{pmatrix}a&-b\cr b&a\end{pmatrix}$ 가 매장이고, $K^\times$ 는 $\mathrm{GL}\_2(\mathbb Q)$ 안에서 회전과 확대로 된 토러스다.

# 성질

## 국소 정리

국소체 $F_v$ 에서 $K_v$ 는 $F_v$ 의 이차 확대이거나 $F_v\times F_v$ 이고, $B_v$ 는 $M_2(F_v)$ 이거나 유일한 나눗셈 사원수 대수(quaternion division algebra)다. [Tunnell–Saito 국소 부호 공식](tunnell-saito.md)에 따르면 두 가지 $B_v$ 에 대해

$$
\dim\mathrm{Hom}\_{K_v^\times}\bigl(\pi_v,\chi_v\bigr)\le1,
\qquad
\sum_{B_v}\dim\mathrm{Hom}\_{K_v^\times}\bigl(\pi_v,\chi_v\bigr)=1
$$

이고 어느 쪽이 1 인지는 부호가 결정한다.[^1]

$$
\dim\mathrm{Hom}\_{K_v^\times}(\pi_v,\chi_v)=1
\ \text{ on }\ M_2(F_v)
\quad\Longleftrightarrow\quad
\varepsilon\negthinspace\left(\tfrac12,\pi_{K,v}\otimes\chi_v\right)\eta_v(-1)=+1
$$

$\eta$ 는 $K/F$ 에 딸린 이차 지표다. 이것이 GGP 추측의 국소 진술의 가장 낮은 경우다.

## 전역 정리

Waldspurger 정리는 다음 진술이다.

$\Sigma$ 를 위 부호가 $-1$ 인 자리들의 집합이라 하자.

- $|\Sigma|$ 가 짝수이면 정확히 $\Sigma$ 에서 분지된 사원수 대수 $B$ 가 유일하게 존재하고, 그 $B$ 위에서 $\mathcal P_\chi\not\equiv0$ 인 것과 $L(1/2,\pi_K\times\chi)\ne0$ 인 것이 동치다.
- $|\Sigma|$ 가 홀수이면 모든 $B$ 위에서 주기가 소멸하고 $L(1/2,\pi_K\times\chi)=0$ 이다.

## 정련된 등식

적절히 정규화한 벡터 $\varphi=\otimes\varphi_v$ 에 대해 값 자체가 결정된다.

$$
\frac{|\mathcal P_\chi(\varphi)|^2}{\langle\varphi,\varphi\rangle}
=\frac{\zeta_F(2)}{2}\cdot
\frac{L\negthinspace\left(\tfrac12,\pi_K\times\chi\right)}{L(1,\pi,\mathrm{Ad})}\cdot
\prod_v\alpha_v(\varphi_v)
$$

$\alpha_v$ 는 $K_v^\times$ 위의 [행렬](matrices.md)계수 적분으로 거의 모든 자리에서 1 이다. 이 형태가 GGP 의 Ichino–Ikeda 정련의 원형이다.


## 부호 계산

전역 부호는 국소 부호의 곱이고, 그 값이 필요한 사원수 대수의 존재 여부와 같다. Hilbert 상호법칙이 두 조건을 같은 것으로 만든다.

국소 부호를 $\varepsilon_v$ 라 하고 $S=\lbrace v:\varepsilon_v=-1\rbrace$ 를 그 자리의 집합이라 하면 전역 부호는

$$
\varepsilon=\prod_v\varepsilon_v=(-1)^{|S|}
$$

이다. 정확히 $S$ 에서 분지하는 사원수 대수 $B/F$ 는 $|S|$ 가 짝수일 때만 존재하므로, $B$ 의 존재와 $\varepsilon=+1$ 이 같은 조건이다.

그래서 주기가 정의되는 사원수 대수가 없는 경우와 함수방정식이 중심값을 $0$ 으로 만드는 경우가 같은 부호 $\varepsilon=-1$ 로 정해진다.

## 두 정리의 분업

| | ε=+1 | ε=-1 |
| --- | --- | --- |
| 중심값 | 보통 $\ne0$ | 항상 $=0$ |
| 소멸하지 않는 양 | 토릭 주기 $\mathcal P_\chi$ | 주기는 0, 대신 도함수 |
| 기하 | 사원수 대수 위의 유한집합 | Shimura 곡선 위의 복소곱셈(complex multiplication, CM) 점 |
| 정리 | Waldspurger | Gross–Zagier |
| BSD(Birch–Swinnerton-Dyer) 계수 | 0 | 1 |

같은 데이터 $(\pi,K,\chi)$ 에서 부호에 따라 두 정리 중 하나가 작동한다. $\varepsilon=-1$ 이면 주기 대신 [Heegner 점과 Gross–Zagier 공식](heegner-points.md)의 Heegner 점의 높이가 $L'(1/2)$ 를 준다. 이 짝을 고차원 고전군으로 넓힌 추측이 산술 GGP(arithmetic GGP)다.

## 증명의 계보

- Waldspurger (1985): [theta 급수](theta-series.md)가 주는 theta 대응과 [Siegel–Weil 공식](siegel-weil.md)으로 반정수 무게 쪽과 토릭 주기 쪽을 직접 잇는다. 쌍대쌍 $(\widetilde{\mathrm{SL}}\_2,\mathrm{PGL}\_2)$ 의 theta 올림이 한쪽에서는 반정수 무게 형식의 계수를, 다른 쪽에서는 토릭 주기를 내놓는다.[^2]
- Jacquet 의 상대 대각합 공식(relative trace formula): 토러스 주기를 담은 대각합 공식과 $\mathrm{GL}\_2$ 의 Kuznetsov 형 대각합 공식을 비교한다. 이 방법이 고계수로 확장되어 Jacquet–Rallis 가 되었고 유니터리군 GGP 의 증명 틀이 되었다.

## 중복도 1 의 역할

정련된 등식의 좌변이 잘 정의되려면 $\mathrm{Hom}$ 공간이 1 차원이어야 한다. 2 차원이면 주기를 재는 방법이 여럿이 되어 주기의 제곱이라는 양이 벡터 선택에 따라 달라진다. [중복도 1](whittaker-models.md)이 주기 이론의 전제 조건이다.

# 활용

- 중심값의 수치 계산. 중심 $L$ 값을 직접 계산하려면 근사 함수방정식으로 급수를 자르고 오차를 관리해야 한다. 반정수 무게 형식의 Fourier 계수는 theta 급수의 곱으로 표현되어 정수 연산만으로 나오고, 한 번의 $q$ 전개로 여러 판별식 $D$ 의 중심값을 얻는다. BSD 추측의 수치 검증, 이차 뒤틀림 족의 계수 0 분포 조사, 합동수 판정에 쓰인다. Tunnell 의 정리가 합동수를 삼항이차형식의 표현수로 판정하는 것도 이 계산의 사례다.
- 비소멸의 통계. $\chi$ 나 $D$ 를 움직이며 중심값의 비소멸 비율을 묻는 문제는 Waldspurger 로 옮기면 반정수 무게 형식 계수의 비소멸 문제가 되고, Fourier 계수의 크기 추정과 합 공식을 쓸 수 있다. 계수 0 인 [타원곡선](elliptic-curves.md)이 양의 비율을 차지한다는 결과들이 이 경로를 지난다.
- BSD 로의 입력. $L(E,1)\ne0$ 이면 Mordell–Weil 계수가 0 이라는 [BSD](birch-swinnerton-dyer.md)의 절반은 Kolyvagin 의 [Euler 계](euler-systems.md) 논법이 준다. 그 논법에 필요한 비소멸 조건의 확인을 Waldspurger 가 계수 계산으로 바꾼다.

[^1]: J. Tunnell, *Local epsilon factors and characters of GL(2)*, Amer. J. Math. **105** (1983). H. Saito, *On Tunnell's formula for characters of* $\mathrm{GL}(2)$ (Compositio Math. **85**, 1993).

[^2]: J.-L. Waldspurger, *Sur les valeurs de certaines fonctions $L$ automorphes en leur centre de symétrie*, Compositio Math. **54** (1985), 173–242. 고전적 판본은 W. Kohnen, D. Zagier, *Values of $L$ series of modular forms at the center of the critical strip*, Invent. Math. **64** (1981).

# 연관 문서

## 선수지식

- [Gan–Gross–Prasad 추측](gan-gross-prasad.md)
- [Heegner 점과 Gross–Zagier 공식](heegner-points.md)
- [Jacquet–Langlands 대응](jacquet-langlands.md)

## 더 알아보기

- [Tunnell–Saito 국소 부호 공식](tunnell-saito.md)

#number_theory #group_theory #theorem
