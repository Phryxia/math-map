# Hartshorne–Lichtenbaum 소멸 정리

# 개요

Hartshorne–Lichtenbaum 소멸 정리는 [국소 코호몰로지](local-cohomology.md) $H^i\_I(R)$ 의 최고차 $i=\dim R$ 이 언제 $0$ 인지를 $R/I$ 의 차원으로 판정한다.

**정리.** $(R,\mathfrak m)$ 이 $d$ 차원 완비 국소 정역이면

$$
H^d\_I(R)=0\iff\dim R/I\gt0
$$

이다.[^1]

Grothendieck 의 비소멸 정리는 $I=\mathfrak m$ 에서 $H^d\_{\mathfrak m}(R)\neq0$ 을 준다. 이 정리는 그 반대편을 채운다. $V(I)$ 가 닫힌점 하나로 줄어드는 경우를 빼면 최고차가 항상 소멸한다.

# 직관

## 두 아이디얼의 계산

$R=k\lbrack\lbrack x,y\rbrack\rbrack$ 은 $2$ 차원 완비 국소 정역이다. $I=\mathfrak m=(x,y)$ 에 대한 Čech 복합체

$$
0\to R\to R_x\oplus R_y\to R_{xy}\to0
$$

의 마지막 자리에서 $H^2\_{\mathfrak m}(R)=R_{xy}/(R_x+R_y)$ 이고, 이 몫은 $x^{-a}y^{-b}$ $(a,b\ge1)$ 을 기저로 갖는 무한차원 공간이다.

$I=(x)$ 로 바꾸면 Čech 복합체가

$$
0\to R\to R_x\to0
$$

으로 짧아진다. $H^1\_{(x)}(R)=R_x/R$ 이고 $H^2\_{(x)}(R)=0$ 이다. 최고차가 죽었다.

## 죽는 자리와 사는 자리

두 계산의 차이는 복합체의 길이다. $\mathfrak m$ 은 생성원이 둘이라 복합체가 차수 $2$ 까지 가고, $(x)$ 는 하나라 차수 $1$ 에서 끝난다. 생성원 개수는 근기가 같은 아이디얼을 골라 줄일 수 있고, 줄일 수 있는 한계가 $\dim R/I$ 로 정해진다.

$\dim R/(x)=1$ 이고 $\dim R/\mathfrak m=0$ 이다. 정리로 이 값이 $0$ 일 때만 최고차가 살아남는다.

# 정의

## 산술 랭크

$$
\mathrm{ara}(I)=\min\lbrace r:\sqrt{(a_1,\dots,a_r)}=\sqrt I\ \text{인}\ a_1,\dots,a_r\in R\ \text{가 있다}\rbrace
$$

국소 코호몰로지는 근기만 보고 Čech 복합체는 생성원 개수만큼 길므로 $i\gt\mathrm{ara}(I)$ 에서 $H^i\_I(M)=0$ 이다.

## 코호몰로지 차원

$$
\mathrm{cd}(I)=\max\lbrace i:H^i\_I(M)\neq0\ \text{인 가군}\ M\ \text{가 있다}\rbrace
$$

위 문단에서 $\mathrm{cd}(I)\le\mathrm{ara}(I)$ 이고 Grothendieck 소멸에서 $\mathrm{cd}(I)\le\dim R$ 이다.

## 정리

$(R,\mathfrak m)$ 을 $d$ 차원 국소환, $I\subseteq R$ 를 아이디얼이라 하자. 완비화 $\hat R$ 의 최소 소 아이디얼 가운데 $\dim\hat R/\mathfrak p=d$ 인 것 전부에 대해 $\dim\hat R/(I\hat R+\mathfrak p)\gt0$ 이면, 그리고 그때만

$$
H^d\_I(R)=0
$$

이다.[^1] $R$ 이 완비 국소 정역이면 최소 소 아이디얼이 $0$ 하나뿐이므로 조건이 $\dim R/I\gt0$ 으로 줄어든다.

# 성질

## 완비화로 옮긴 판정

국소 코호몰로지는 완비화와 교환하므로 $H^d\_I(R)=0$ 과 $H^d\_{I\hat R}(\hat R)=0$ 이 같다. 그러나 $R$ 이 정역이어도 $\hat R$ 은 정역이 아닐 수 있고, 그때는 $\dim R/I\gt0$ 만으로 최고차가 죽지 않는다. 판정은 $\hat R$ 의 최소 소 아이디얼마다 따로 해야 한다.

## 증명의 요지

$I$ 가 한 원소로 생성된 경우로 먼저 줄인다. 일반의 $I$ 는 생성원 개수에 대한 귀납과 Mayer–Vietoris 열로 그 경우에 붙는다. 완비 국소 정역에서 $H^d\_{(a)}(R)$ 의 Matlis 쌍대를 잡으면 정규화 위의 역계 극한이 되고, $\dim R/(a)\gt0$ 이면 그 극한의 사상들이 모두 $0$ 을 거쳐 극한이 소멸한다.[^1]

## 최고차 하나만의 정리

정리로 차수 $d$ 만 정해지고 그 아래 차수는 정해지지 않는다. $\mathrm{cd}(I)$ 를 정확히 정하는 문제는 표수에 따라 답이 다르다. 표수 $p\gt0$ 에서는 Peskine–Szpiro 가 Frobenius 로 $\mathrm{cd}(I)\lt d$ 와 $\dim R/I\gt0$ 의 동치를 확장했고, 표수 $0$ 에서는 de Rham 코호몰로지를 쓰는 Ogus 의 판정이 있다.[^2]

# 활용

## 산술 랭크의 결정

$\dim R/I=0$ 이면 정리가 $H^d\_I(R)\neq0$ 을 주고, 따라서 $\mathrm{ara}(I)\ge d$ 다. 위에서 $\mathrm{ara}(I)\le d$ 는 $I$ 가 $\mathfrak m$ 근원일 때 매개변수계가 주므로 $\mathrm{ara}(I)=d$ 다. 아이디얼을 근기까지만 맞춘다고 해도 생성원을 $d$ 개 아래로 줄일 수 없다.

## 집합론적 완전교차의 판정

아이디얼 $I$ 가 $\mathrm{ara}(I)=\mathrm{ht}\thinspace I$ 를 만족하면 $V(I)$ 를 그 여차원만큼의 방정식으로 자를 수 있다. 국소 코호몰로지의 비소멸이 $\mathrm{ara}$ 의 하한을 주므로, $H^i\_I(R)\neq0$ 인 $i$ 가 높이보다 크면 집합론적 완전교차가 아니다.

## 사영 다양체의 연결성

$X\subseteq\mathbb P^n$ 의 아핀뿔에 정리를 적용하면 $X$ 의 여차원이 작을 때 $X$ 가 연결임이 따라온다. 차원이 큰 두 부분다양체가 만나야 한다는 진술도 같은 계산에서 나온다.[^2]

[^1]: R. Hartshorne, *Cohomological dimension of algebraic varieties*, Ann. of Math. **88** (1968), 403–450. 정리의 이름에 붙은 Lichtenbaum 의 기여는 이 논문의 서문이 밝힌다. 교과서 서술은 M. Brodmann, R. Sharp, *Local Cohomology*, 2nd ed., Cambridge (2013) 8 장이다.
[^2]: C. Peskine, L. Szpiro, *Dimension projective finie et cohomologie locale*, Publ. Math. Inst. Hautes Études Sci. **42** (1973), 47–119. 표수 $0$ 의 판정은 A. Ogus, *Local cohomological dimension of algebraic varieties*, Ann. of Math. **98** (1973), 327–365. 연결성은 앞 각주의 Hartshorne 논문과 G. Faltings, *Über lokale Kohomologiegruppen hoher Ordnung*, J. Reine Angew. Math. **313** (1980), 43–51.

# 연관 문서

## 선수지식

- [국소 코호몰로지](local-cohomology.md)

## 더 알아보기

아직 연결한 문서가 없다.

#ring_theory #algebra #category_theory
