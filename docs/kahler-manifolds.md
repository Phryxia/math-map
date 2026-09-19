# Kähler 다양체와 Hodge 분해

# 개요

[Hodge 이론](hodge-theory.md)은 Riemann 계량 하나를 주고 코호몰로지류마다 조화 대표원을 얻었다. 복소 다양체에서는 구조가 하나 더 있다. 각 접공간에 $i$ 를 곱하는 연산이 있고, 그 결과 미분형식이 [정칙](holomorphic-functions.md) 방향과 반정칙 방향으로 쪼개진다.

여기에는 계량 $g$ , 복소구조 $J$ , 둘이 만드는 2-형식 $\omega$ 세 구조가 놓인다. 셋이 서로 정합적이고 $\omega$ 가 닫혀 있으면 **Kähler 다양체**라 한다.

Laplace 작용소는 $\Delta_d$ , $\Delta_\partial$ , $\Delta_{\bar\partial}$ 세 종류인데 $d\omega=0$ 이 이들을 하나로 만든다. 그러면 조화형식 공간이 $(p,q)$ 성분으로 쪼개지고 Betti 수가 복소구조를 반영하는 세밀한 수들로 분해된다. 이 분해에서 $b_1$ 이 짝수라는 제약과 복소 다양체가 사영공간에 들어가는 조건이 따라온다.

복소 사영공간의 닫힌 부분다양체는 모두 Kähler 이므로 모든 사영 대수다양체가 이 이론의 대상이고, 그래서 Hodge 이론이 대수기하의 기본 도구가 되었다.

# 직관

## $(p,q)$ 분해

복소좌표 $z_j=x_j+iy_j$ 에서 $dz_j=dx_j+i\thinspace dy_j$ 와 $d\bar z_j=dx_j-i\thinspace dy_j$ 를 쓰면, 복소값 $k$ 형식이 $dz$ 를 $p$ 개, $d\bar z$ 를 $q$ 개 쓴 항들의 합으로 유일하게 쓰인다. 이것이 $(p,q)$ 분해이고 $p+q=k$ 다.

외미분도 따라서 쪼개진다. $d=\partial+\bar\partial$ 에서 $\partial$ 이 $p$ 를 1 올리고 $\bar\partial$ 가 $q$ 를 1 올린다. $d^2=0$ 을 전개하면 $\partial^2=\bar\partial^2=0$ 과 $\partial\bar\partial+\bar\partial\partial=0$ 이 나온다.

$\bar\partial$ 만 쓴 복합체의 코호몰로지가 **Dolbeault 코호몰로지** $H^{p,q}$ 다. 복소해석적 불변량이며 일반 복소 다양체에서는 위상적 코호몰로지와 관계가 없다.

## Kähler 조건

$d$ 에 대한 조화형식과 $\bar\partial$ 에 대한 조화형식이 다른 공간이므로 일반적으로 $H^k_{\mathrm{dR}}$ 와 $H^{p,q}$ 사이에는 관계가 없다.

$d\omega=0$ 이면 Kähler 항등식이 $\Delta_d=2\Delta_{\bar\partial}=2\Delta_\partial$ 를 주고, 세 작용소의 핵이 같아진다. $\Delta_{\bar\partial}$ 는 $(p,q)$ 를 보존하므로 그 핵이 $(p,q)$ 성분으로 쪼개지고 $\Delta_d$ 의 핵도 그렇게 쪼개진다.

## 홀수 Betti 수의 짝수성

$\Delta_{\bar\partial}$ 가 실 작용소의 복소화이므로 켤레가 조화형식을 조화형식으로 보내고, $(p,q)$ 를 $(q,p)$ 로 바꾼다. 따라서 $h^{p,q}=h^{q,p}$ 다.

$k$ 가 홀수면 $p+q=k$ 인 쌍들이 $(p,q)$ 와 $(q,p)$ 로 완전히 짝지어진다. $p=q$ 인 항이 없기 때문이다. 그래서

$$
b_k=\sum_{p+q=k}h^{p,q}=2\sum_{p\lt q}h^{p,q}
$$

가 짝수다. $b_1$ 이 홀수인 복소 다양체는 Kähler 계량을 가질 수 없고, $S^1\times S^3$ 에 복소구조를 준 Hopf 곡면이 $b_1=1$ 인 예다.

# 정의

## 복소 다양체와 복소구조

전이함수가 정칙인 복소 좌표근방계를 가진 다양체가 **복소 다양체**다. 실차원은 $2n$ 이고 복소차원을 $n$ 이라 한다.

각 접공간에 $J^2=-\mathrm{id}$ 인 자기준동형이 유도되며 이것이 **개복소구조**다. 복소화한 접공간이 $J$ 의 고유공간으로 $T^{1,0}\oplus T^{0,1}$ 로 쪼개지고, 쌍대에서 $dz$ 와 $d\bar z$ 가 각각 이 분해에 대응한다.

## Hermite 계량과 Kähler 형식

Riemann 계량 $g$ 가 $g(JX,JY)=g(X,Y)$ 를 만족하면 **Hermite 계량**이다. 이때

$$
\omega(X,Y)=g(JX,Y)
$$

가 비퇴화 2-형식이 되며 이것이 **Kähler 형식**이다. $g,J,\omega$ 중 둘이 나머지를 결정한다.

국소좌표에서는 $\omega=\frac i2\sum h_{j\bar k}\thinspace dz_j\wedge d\bar z_k$ 꼴이고, $(h_{j\bar k})$ 가 양의 정부호 Hermite 행렬이다.

## Kähler 다양체

$d\omega=0$ 이면 **Kähler 다양체**다. 다음은 동치인 조건이다.

- $\nabla J=0$ 이다. 곧 Levi-Civita 접속이 복소구조를 보존한다.
- 각 점 근처에서 계량이 유클리드 계량과 2 차까지 일치한다(정칙 정규좌표의 존재).
- 국소적으로 $\omega=i\partial\bar\partial\varphi$ 인 실함수 $\varphi$ 가 존재한다(Kähler 퍼텐셜).

셋째 조건은 계량을 함수 하나로 기술하므로 Calabi 추측 같은 문제가 $\varphi$ 에 대한 편미분방정식이 된다.

## 주요 예

- $\mathbb C^n$ 에서는 표준 계량이 Kähler 이고 $\omega=\frac i2\sum dz_j\wedge d\bar z_j$ 다.
- 복소 원환면 $\mathbb C^n/\Lambda$ 에는 평탄한 계량이 내려온다.
- 복소 사영공간 $\mathbb{CP}^n$ 에서는 Fubini–Study 계량이 $\omega_{FS}=\frac i2\partial\bar\partial\log\Vert Z\Vert^2$ 로 주어진다.
- 위의 것들의 복소 부분다양체: $\omega$ 의 제한이 다시 닫혀 있으므로 Kähler 다. 따라서 모든 사영 대수다양체가 Kähler 다.

## Dolbeault 코호몰로지와 Hodge 수

$$
H^{p,q}\_{\bar\partial}(M)=\frac{\ker\bar\partial|\_{\Omega^{p,q}}}{\mathrm{im}\thinspace\bar\partial|\_{\Omega^{p,q-1}}},\qquad h^{p,q}=\dim_{\mathbb C}H^{p,q}
$$

$h^{p,q}$ 를 격자 모양으로 배열한 것이 Hodge 다이아몬드다.

# 성질

## Kähler 항등식

$L\alpha=\omega\wedge\alpha$ 와 그 딸림 $\Lambda=L^\ast$ 를 쓰면 다음이 성립한다.

$$
[\Lambda,\bar\partial]=-i\partial^\ast,\qquad [\Lambda,\partial]=i\bar\partial^\ast
$$

증명은 $\mathbb C^n$ 에서 확인한 뒤 Kähler 계량이 각 점에서 2 차까지 평탄하다는 사실로 일반 경우에 옮기는 것이다. 여기서 다음이 따라온다.

$$
\Delta_d=2\Delta_{\bar\partial}=2\Delta_\partial
$$

Kähler 조건이 없으면 세 작용소가 다르고 아래 결론이 성립하지 않는다.

## Hodge 분해

콤팩트 Kähler 다양체에서

$$
H^k(M;\mathbb C)=\bigoplus_{p+q=k}H^{p,q},\qquad \overline{H^{p,q}}=H^{q,p}
$$

따라서 $b_k=\sum_{p+q=k}h^{p,q}$ 이고 $h^{p,q}=h^{q,p}$ 다. Serre 쌍대성이 $h^{p,q}=h^{n-p,n-q}$ 를 더해 주므로 Hodge 다이아몬드가 가로세로 두 방향으로 대칭이다.

따름결과는 다음과 같다.

- $b_k$ 가 홀수 $k$ 에서 짝수다.
- $h^{1,1}\ge1$ 이다. $[\omega]$ 자신이 $H^{1,1}$ 의 0 이 아닌 원소이기 때문이다.
- $[\omega]^k\ne0$ 이므로 $b_{2k}\ge1$ 이다. $S^6$ 은 $b_2=0$ 이라 복소구조를 갖더라도 Kähler 일 수 없다.

## 강한 Lefschetz 정리

$L=\omega\wedge(-)$ 의 거듭제곱이 동형을 준다.

$$
L^k:H^{n-k}(M;\mathbb R)\xrightarrow{\ \sim\ }H^{n+k}(M;\mathbb R)
$$

$b_{n-k}=b_{n+k}$ 이고 $k\le n$ 인 범위에서 $b_{k-2}\le b_k$ 로 Betti 수가 가운데까지 단조증가한다. 어떤 다양체가 사영 대수다양체가 될 수 있는지를 거르는 첫 검사다.

$L$ 과 $\Lambda$ 와 등급에서 오는 작용소가 $\mathfrak{sl}\_2$ 를 이루므로 코호몰로지 전체가 $\mathfrak{sl}\_2$ 의 표현이 되고, 표현론의 표준 결과가 정리를 준다.

## Hodge 다이아몬드 계산

복소 원환면 $\mathbb C^g/\Lambda$ 의 Hodge 수는 $h^{p,q}=\binom gp\binom gq$ 이고, 그 Betti 수 $\binom{2g}k$ 는 $T^{2g}$ 의 위상적 Betti 수와 같다. Hodge 분해가 Vandermonde 항등식 $\sum_p\binom gp\binom g{k-p}=\binom{2g}k$ 을 실현하며, 수 하나가 복소구조에 따라 $g+1$ 개 조각으로 나뉜다.

$\mathbb{CP}^n$ 에서는 홀수 Betti 수가 모두 0 이고 짝수 자리에 1 씩 있다. $H^{2k}$ 를 $[\omega]^k$ 가 생성하고 $b_{n-k}=b_{n+k}$ 가 성립한다.

## Kähler 가 아닌 복소 다양체

복소구조는 있으나 Kähler 계량이 없는 예가 있다.

- Hopf 곡면 $(\mathbb C^2\setminus0)/(z\sim2z)\cong S^1\times S^3$ 은 $b_1=1$ 이라 홀수다.
- Iwasawa 다양체: $d\omega=0$ 인 계량이 없고, 위상적 코호몰로지와 Dolbeault 코호몰로지의 관계가 깨진다.

Kähler 조건은 실질적 제약이다. Kodaira 매장 정리는 $[\omega]$ 가 정수 코호몰로지류로 잡히면 그 다양체가 사영공간에 매장됨을 말하므로, 정수 Kähler 류를 가지는 것과 사영 대수다양체인 것이 동치다.

# 활용

## 대수기하의 기본 도구

사영 대수다양체가 모두 Kähler 이므로 위 결론이 대수기하에 그대로 적용된다. $h^{p,0}$ 은 정칙 $p$ 형식의 개수이고, $h^{1,0}$ 이 곡선의 종수이며, $h^{n,0}$ 이 기하종수다. 곡면 분류에서 Hodge 수가 기본 불변량으로 쓰인다.

Hodge 구조로 추상화하면 다양체의 족에서 Hodge 분해의 변화를 추적하는 변분 Hodge 이론이 된다. 모듈라이 공간의 기하가 이 변화로 기술되고 주기 사상과 Torelli 정리가 중심 결과다.

## Hodge 추측

$H^{2k}(M;\mathbb Q)\cap H^{k,k}$ 의 원소를 Hodge 류라 한다. 대수적 부분다양체는 언제나 Hodge 류를 준다. 모든 Hodge 류가 대수적 순환의 유리계수 결합인가를 묻는 것이 **Hodge 추측**이며 밀레니엄 문제의 하나다. $k=1$ 인 경우는 Lefschetz 의 $(1,1)$ 정리로 참이고, 일반적인 $k$ 에서는 판정되지 않았다[^1].

## Calabi–Yau 와 물리

$c_1=0$ 인 콤팩트 Kähler 다양체에 Ricci 평탄한 Kähler 계량이 유일하게 존재한다는 것이 Calabi 추측이고 Yau 가 증명했다. 그 다양체가 Calabi–Yau 다양체다.

끈이론의 여분 차원이 복소 3 차원 Calabi–Yau 로 말려 있다고 보는 모형에서 입자의 세대 수 같은 물리량이 Hodge 수로 결정된다. 거울대칭은 서로 다른 두 Calabi–Yau 가 같은 물리를 주며 그 Hodge 다이아몬드가 $h^{p,q}\leftrightarrow h^{n-p,q}$ 로 뒤집힌다는 예측이고, 여기서 나온 유리곡선 개수의 공식이 대수기하에서 검증되며 열거기하가 열렸다.

## 비아벨 Hodge 대응

Simpson 등은 기본군의 표현과 다양체 위의 정칙 대상을 대응시켰다. 평탄한 접속, Higgs 다발, 조화 사상이 같은 대상의 세 기술이며 세 기술을 잇는 데 조화형식의 존재 정리를 쓴다.

Kähler 다양체의 기본군에는 제약이 따른다. 자유군 $F_n$ 은 $n\ge2$ 이면 콤팩트 Kähler 다양체의 기본군이 될 수 없다. 어떤 군이 Kähler 군인가가 이 이론의 주제다.

[^1]: P. Deligne, *The Hodge Conjecture*, Clay Mathematics Institute 공식 문제 설명. https://www.claymath.org/wp-content/uploads/2022/06/hodge.pdf 밀레니엄 문제의 하나로 분류되어 있으며 $(1,1)$ 정리 밖의 경우가 판정되지 않았음을 밝힌다.

# 연관 문서

## 선수지식

- [Hodge 이론과 조화형식](hodge-theory.md)
- [정칙함수와 Cauchy 적분 정리](holomorphic-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #algebraic_topology #complex_analysis
